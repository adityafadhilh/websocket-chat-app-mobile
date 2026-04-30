import { Image, Text, TouchableOpacity, View } from "react-native"
import { User } from "../types/user.type"
import { Chat } from "../types/chat.type";
import moment from "moment";

type ChatRowProps = {
    user?: User;
    onPress: () => void;
    chat?: Chat;
};

export const ChatItemRow = ({user, onPress, chat}: ChatRowProps) => {
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
            onPress={onPress}
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
            }}>{moment(chat?.updatedAt).format('HH:MM A')}</Text>

        </TouchableOpacity>
    )
}