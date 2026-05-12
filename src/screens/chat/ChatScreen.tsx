import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, Send } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BubbleChat } from "../../components/BubbleChat";
import { MemberItem } from "../../components/MemberItem";
import { useChats } from "../../hooks/useChats";
import { useUsers } from "../../hooks/useUsers";
import { socket } from "../../helpers/socket";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { HistoryEntry } from "../../types/chat.type";
import { RootStackParamList } from "../../navigation/navigation.type";


export const ChatScreen = ({ route }: any) => {
    const {
        chatId
    } = route.params;

    const {
        currentUser
    } = useCurrentUser();

    const [inputMsg, setInputMsg] = useState<string>();

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const {
        chat,
        getChatById,
    } = useChats();
    const {
        users,
        getFriends,
        getUsers
    } = useUsers();

    const [historyMsg, setHistoryMsg] = useState<HistoryEntry[]>([]);
    const flatlistRef = useRef<FlatList<HistoryEntry> | null>(null);

    const handleSocket = () => {
        console.log('handleSocket');
        console.log(chat?.members);
        if (chat?.members) {
            socket.io.opts.query = {
                members: chat?.members
            };

            socket.connect();
        }
    };

    const handleSendMessage = () => {
        const newHistory = [...(historyMsg ?? []), {
            from: currentUser?._id,
            to: chat?.members.find((member) => member !== currentUser._id),
            message: inputMsg,
            sentTime: new Date()
        }];
        socket.emit('chat message', newHistory);
        setInputMsg('');
    };

    useEffect(() => {
        console.log('init');

        if (chatId) {
            console.log('chatId: ' + chatId);
            getChatById(chatId);
            getUsers()
        }

        socket.on("chat message", (data) => {
            console.log('on received');
            console.log('received history: ' + JSON.stringify(data));
            setHistoryMsg(data);
        });

        return () => {
            socket.off('chat message');
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (chat) {
            setHistoryMsg(chat?.history);
            handleSocket();
        }
    }, [chat]);

    useEffect(() => {
        flatlistRef.current?.scrollToEnd({ animated: true});
    }, [historyMsg])

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 25
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 10,
                alignItems: 'center'
            }}>
                <TouchableOpacity style={{
                    flex: 1,
                }}
                    // onPress={() => navigation.goBack()}
                    onPress={() => navigation.replace("Main", {
                        screen: 'Messages',
                        params: {
                            chatId
                        }
                    })}
                >
                    <ChevronLeft />
                </TouchableOpacity>
                {chat?.members.map((member) => {
                    let user = users.find((it) => it._id == member);
                    return <MemberItem key={user?._id} user={user} />
                })}
            </View>
            <View style={{
                marginTop: 20,
                paddingBottom: 100
            }}>
                {historyMsg.length > 0 ?
                    <FlatList
                        data={historyMsg}
                        renderItem={(it) => <BubbleChat key={it.item._id} history={it.item} />}
                        showsVerticalScrollIndicator={false}
                        // keyExtractor={(it) => it._id.toString()}
                        ref={flatlistRef}
                    />
                    :
                    <FlatList
                        data={chat?.history}
                        renderItem={(it) => <BubbleChat key={it.item._id} history={it.item} />}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(it) => it._id.toString()}
                        ref={flatlistRef}
                    />
                }

            </View>
            <View style={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                left: 10,
                backgroundColor: 'white',
                borderRadius: 15,
                borderColor: 'gray',
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <TextInput style={{ flex: 1 }} placeholder="Type your message here" value={inputMsg} onChangeText={(v) => setInputMsg(v)} />
                <TouchableOpacity onPress={handleSendMessage}>
                    <Send size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
};