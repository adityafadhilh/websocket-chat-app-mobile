import { Image, Text, TouchableOpacity, View } from "react-native"
import { CHATS, CURRENT_USER, USERS } from "../../constants/mock.data"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ChatItemRow } from "../../components/ChatItemRow"

export const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={{
            paddingHorizontal: 25,
            paddingVertical: 15,
            backgroundColor: '#1F1D1D',
            flex: 1
        }}>
            {CHATS.filter((chat) => chat.members.includes(CURRENT_USER._id)).map((chat) => {
                console.log(chat);
                let user = USERS.find((it) => it._id == chat.members[1]);
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