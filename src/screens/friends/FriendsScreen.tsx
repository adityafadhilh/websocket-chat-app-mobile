import { Image, Text, TouchableOpacity, View } from "react-native"
import { USERS } from "../../constants/mock.data"

export const FriendsScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#1F1D1D',
            paddingHorizontal: 25,
            paddingVertical: 15
        }}>
            {USERS.map((user) => {
                return (
                    <TouchableOpacity
                        key={user._id}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 20,
                            alignItems: 'center',
                            marginBottom: 20,
                            // borderBottomWidth: 1,
                            // borderBottomColor: 'gray',
                            // padding: 20,
                            // borderStyle: 'dotted'
                        }}
                    >
                        <Image style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'white',
                            borderRadius: 25,
                        }} resizeMode="cover" source={user?.avatar ? { uri: user.avatar.replace('/svg', '/png') } : undefined} />
                        <View style={{
                            flex: 1,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 18
                            }}>{user?.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}