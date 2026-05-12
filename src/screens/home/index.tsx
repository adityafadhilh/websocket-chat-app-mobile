import { Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ChatItemRow } from "../../components/ChatItemRow"
import { useChats } from "../../hooks/useChats"
import { useEffect } from "react"
import { useUsers } from "../../hooks/useUsers"
import { useCurrentUser } from "../../hooks/useCurrentUser"
import { RootStackParamList } from "../../navigation/navigation.type"

export const HomeScreen = ({ route }: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { getChats, chats } = useChats();
    const { users, friends, getFriends, getUsers } = useUsers();
    const { currentUser } = useCurrentUser();

    useEffect(() => {
        getFriends();
        getChats();
        getUsers()
    }, []);

    useEffect(() => {
        getFriends();
        getChats();
    }, [currentUser._id]);

    useEffect(() => {
        if (route?.params?.chatId) {
            getChats();
        }
    }, [route?.params?.chatId])

    return (
        <View style={{
            paddingHorizontal: 25,
            paddingVertical: 15,
            backgroundColor: '#1F1D1D',
            flex: 1
        }}>
            {chats.map((chat, index) => {
                console.log('index: ' + index + '=====> ' + JSON.stringify(chat));
                let user = users.find((it) => {
                    console.log('curr: ' + JSON.stringify(currentUser));
                    if (currentUser._id == chat.members[0]) {
                        return it._id == chat.members[1]
                    } else if (currentUser._id == chat.members[1]) {
                        console.log('here')
                        return it._id == chat.members[0]
                    }
                })
                console.log(user)
                return (
                    <ChatItemRow
                        key={chat._id}
                        user={user}
                        chat={chat}
                        onPress={() => navigation.navigate('Chat', { chatId: chat._id || '' })}
                    />
                )
            })}
        </View>
    )
}