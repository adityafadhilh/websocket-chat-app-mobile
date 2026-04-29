import { Image, Text, TextInput, View } from "react-native"
import { CHATS, USERS } from "../../constants/mock.data";
import COLORS from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { User } from "../../types/user.type";

export const ChatScreen = ({ route }: any) => {
    const {
        userId,
        recipientId
    } = route.params;

    const [user, setUser] = useState<User>();
    const [recipient, setRecipient] = useState<User>();

    useEffect(() => {
        console.log('init');
        if (userId) {
            console.log('userId: ' + userId);
            setUser(USERS.find((it) => it._id == userId))
        }
        if (recipientId) {
            console.log('recipientId: ' + recipientId);
            setRecipient(USERS.find((it) => it._id == recipientId))
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
                gap: 10
            }}>
                <View>
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
                </View>


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