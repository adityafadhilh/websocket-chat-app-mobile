import { FlatList, Image, Text, TextInput, View } from "react-native"
import { CHATS, CURRENT_USER, USERS } from "../../constants/mock.data";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { User } from "../../types/user.type";
import { Chat, HistoryEntry } from "../../types/chat.type";
import moment from "moment";

export const ChatScreen = ({ route }: any) => {
    const {
        chatId
    } = route.params;

    // const [user, setUser] = useState<User>();
    // const [recipient, setRecipient] = useState<User>();
    const [chat, setChat] = useState<Chat>();

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
            setChat(CHATS.find((it) => it._id == chatId));
        }
    }, [])

    const _renderChatBubble = (history: HistoryEntry) => {
        let fromUser = USERS.find((it) => it._id == history.from);
        let toUser = USERS.find((it) => it._id == history.to);

        if (history.from == CURRENT_USER._id) {
            return (
                <View style={{ 
                    marginBottom: 15
                 }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end'
                    }}>
                        <Text style={{ 
                            marginRight: 10,
                            fontSize: 12,
                         }}>{moment(history.sentTime).format('HH:MM A')}</Text>
                        <View style={{
                            backgroundColor: '#1F1D1D',
                            borderRadius: 25,
                            marginRight: 10,
                            padding: 10,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 14,
                                maxWidth: 150
                            }}>
                                {history.message}
                            </Text>
                        </View>
                        {/* <Image style={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'white',
                            borderRadius: 25,
                        }} resizeMode="cover" source={fromUser?.avatar ? { uri: fromUser.avatar.replace('/svg', '/png') } : undefined}
                        /> */}
                    </View>

                </View>
            )
        } else {
            return (
                <View style={{ 
                    marginBottom: 15
                 }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        {/* <Image style={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'white',
                            borderRadius: 25,
                            marginRight: 10
                        }} resizeMode="cover" source={toUser?.avatar ? { uri: toUser.avatar.replace('/svg', '/png') } : undefined}
                        /> */}
                        <View style={{
                            backgroundColor: '#F6F6F6',
                            borderRadius: 25,
                            marginRight: 10,
                            padding: 10,
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 14,
                                maxWidth: 150
                            }}>
                                {history.message}
                            </Text>
                        </View>
                        <Text style={{ 
                            fontSize: 12
                         }}>{moment(history.sentTime).format('HH:MM A')}</Text>
                    </View>

                </View>
            )
        }
    }

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
                gap: 10
            }}>
                {chat?.members.map((member) => {
                    let user = USERS.find((it) => it._id == member);
                    return (
                        <View key={user?._id}>
                            <Image style={{
                                width: 50,
                                height: 50,
                                backgroundColor: 'white',
                                borderRadius: 25,
                            }} resizeMode="cover" source={user?.avatar ? { uri: user.avatar.replace('/svg', '/png') } : undefined}
                            />
                            <View
                                style={{
                                    backgroundColor: user?.online ? 'green' : 'gray',
                                    width: 10,
                                    height: 10,
                                    borderRadius: 25,
                                    position: 'absolute',
                                    right: 0,
                                    bottom: 0
                                }} />
                        </View>
                    )
                })}
                {/* <View>
                    <Image style={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'white',
                        borderRadius: 25,
                    }} resizeMode="cover" source={user?.avatar ? { uri: user.avatar.replace('/svg', '/png') } : undefined}
                    />
                    <View
                        style={{
                            backgroundColor: user?.online ? 'green' : 'gray',
                            width: 10,
                            height: 10,
                            borderRadius: 25,
                            position: 'absolute',
                            right: 0,
                            bottom: 0
                        }} />
                </View>
                <View>
                    <Image style={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'white',
                        borderRadius: 25,
                    }} resizeMode="cover" source={recipient?.avatar ? { uri: recipient.avatar.replace('/svg', '/png') } : undefined}
                    />
                </View> */}


            </View>
            <View style={{ 
                marginTop: 20
             }}>
                <FlatList
                    data={chat?.history}
                    renderItem={(it) => _renderChatBubble(it.item)}
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
                borderWidth: 1
            }}>
                <TextInput placeholder="Type your message here" />
            </View>
        </View>
    )
};