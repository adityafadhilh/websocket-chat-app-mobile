import { Image, Text, TouchableOpacity, View } from "react-native"
import { CURRENT_USER, USERS } from "../../constants/mock.data"
import { FriendItemRow } from "../../components/FriendItemRow"

export const FriendsScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#1F1D1D',
            paddingHorizontal: 25,
            paddingVertical: 15
        }}>
            {USERS.filter((user) => user._id !== CURRENT_USER._id).map((user) => {
                return (
                    <FriendItemRow
                        key={user._id}
                        user={user}
                        onPress={() => { }} />
                )
            })}
        </View>
    )
}