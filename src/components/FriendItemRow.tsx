import { Image, Text, TouchableOpacity, View } from "react-native"
import { User } from "../types/user.type"

type FriendProps = {
    user: User;
    onPress: () => void;
    textColor?: string
}

export const FriendItemRow = (props: FriendProps) => {
    return (
        <TouchableOpacity
            key={props.user._id}
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                marginBottom: 20,
            }}
            onPress={props.onPress}
        >
            <Image style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
                borderRadius: 25,
            }} resizeMode="cover" source={props.user?.avatar ? { uri: props.user.avatar.replace('/svg', '/png') } : undefined} />
            <View style={{
                flex: 1,
            }}>
                <Text style={{
                    color: props.textColor || 'white',
                    fontSize: 18
                }}>{props.user?.name}</Text>
            </View>
        </TouchableOpacity>
    )
}