import { Image, View } from "react-native";
import { User } from "../types/user.type"

type MemberItemProps = {
    user?: User;
};

export const MemberItem = (props: MemberItemProps) => {
    return (
        <View key={props?.user?._id}>
            <Image style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
                borderRadius: 25,
            }} resizeMode="cover" source={props?.user?.avatar ? { uri: props?.user.avatar.replace('/svg', '/png') } : undefined}
            />
            <View
                style={{
                    backgroundColor: props.user?.online ? 'green' : 'gray',
                    width: 10,
                    height: 10,
                    borderRadius: 25,
                    position: 'absolute',
                    right: 0,
                    bottom: 0
                }} />
        </View>
    )
};