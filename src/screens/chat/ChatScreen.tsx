import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { CHATS, CURRENT_USER, USERS } from "../../constants/mock.data";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { User } from "../../types/user.type";
import { Chat, HistoryEntry } from "../../types/chat.type";
import moment from "moment";
import { ChevronLeft, Send } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BubbleChat } from "../../components/BubbleChat";
import { MemberItem } from "../../components/MemberItem";
import { useChats } from "../../hooks/useChats";
import { useUsers } from "../../hooks/useUsers";

export const ChatScreen = ({ route }: any) => {
    const {
        chatId
    } = route.params;

    // const [user, setUser] = useState<User>();
    // const [recipient, setRecipient] = useState<User>();
    // const [chat, setChat] = useState<Chat>();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const {
        chat,
        getChatById
    } = useChats();
    const {
        users,
        getFriends,
        getUsers
    } = useUsers();

    useEffect(() => {
        console.log('init');
        // if (userId) {
        //     console.log('userId: ' + userId);
        //     setUser(USERS.find((it) => it._id == userId))
        // }
        // if (recipientId) {
        //     console.log('recipientId: ' + recipientId);
        //     setRecipient(USERS.find((it) => it._id == recipientId))
        // }
        if (chatId) {
            // setChat(CHATS.find((it) => it._id == chatId));
            console.log('chatId: ' + chatId);
            getChatById(chatId);
            getUsers()
        }
    }, [])

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
                    onPress={() => navigation.goBack()}
                >
                    <ChevronLeft />
                </TouchableOpacity>
                {chat?.members.map((member) => {
                    let user = users.find((it) => it._id == member);
                    return <MemberItem key={user?._id} user={user} />
                })}
            </View>
            <View style={{
                marginTop: 20
            }}>
                <FlatList
                    data={chat?.history}
                    renderItem={(it) => <BubbleChat key={it.item._id} history={it.item} />}
                    keyExtractor={(it) => it._id.toString()}
                />
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
                <TextInput style={{ flex: 1 }} placeholder="Type your message here" />
                <TouchableOpacity>
                    <Send size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
};