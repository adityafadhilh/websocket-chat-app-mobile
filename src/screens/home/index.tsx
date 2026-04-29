import { Image, Text, TouchableOpacity, View } from "react-native"
import { CHATS, CURRENT_USER, USERS } from "../../constants/mock.data"
import COLORS from "../../constants/Colors"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={{
            padding: 25,
            backgroundColor: '#1F1D1D',
            flex: 1
        }}>
            {CHATS.filter((chat) => chat.members.includes(CURRENT_USER._id)).map((chat) => {
                console.log(chat);
                let user = USERS.find((it) => it._id == chat.members[1]);
                console.log(user)
                return (
                    <TouchableOpacity
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 20,
                            alignItems: 'flex-start',
                            marginBottom: 20
                        }}
                        key={user?._id}
                        onPress={() => navigation.navigate('Chat', { chatId: chat._id || '' })}
                    >
                        <Image style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'white',
                            borderRadius: 25,
                        }} resizeMode="cover" source={user?.avatar ? { uri: user.avatar.replace('/svg', '/png') } : undefined} />
                        <View style={{
                            flex: 1
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 18
                            }}>{user?.name}</Text>
                            <Text style={{
                                marginTop: 10,
                                color: 'white',
                                fontSize: 12
                            }}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >{chat?.history[chat.history.length - 1].message}</Text>
                        </View>
                        <Text style={{
                            color: 'white',
                            fontSize: 12
                        }}>14.08 AM</Text>

                    </TouchableOpacity>
                )
            })}
        </View>
    )
}