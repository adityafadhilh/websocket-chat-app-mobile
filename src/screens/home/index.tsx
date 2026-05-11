import { Image, Text, TouchableOpacity, View } from "react-native"
import { CHATS, CURRENT_USER, USERS } from "../../constants/mock.data"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ChatItemRow } from "../../components/ChatItemRow"
import { useChats } from "../../hooks/useChats"
import { useEffect } from "react"
import { useUsers } from "../../hooks/useUsers"
import { useCurrentUser } from "../../hooks/useCurrentUser"

export const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const {getChats, chats} = useChats();
    const {friends, getFriends} = useUsers();
    const {currentUser} = useCurrentUser();

    useEffect(() => {
        getFriends();
        getChats();
    }, []);

    return (
        <View style={{
            paddingHorizontal: 25,
            paddingVertical: 15,
            backgroundColor: '#1F1D1D',
            flex: 1
        }}>
            {chats.map((chat) => {
                console.log(chat);
                let user = friends.find((it) => currentUser._id == chat.members[0] ? it._id == chat.members[1] : it._id == chat.members[0]);
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