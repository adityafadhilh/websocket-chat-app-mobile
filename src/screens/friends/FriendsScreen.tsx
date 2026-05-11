import { Image, Text, TouchableOpacity, View } from "react-native"
import { CURRENT_USER, USERS } from "../../constants/mock.data"
import { FriendItemRow } from "../../components/FriendItemRow"
import { useUsers } from "../../hooks/useUsers"
import { useEffect } from "react"
import { useCurrentUser } from "../../hooks/useCurrentUser"

export const FriendsScreen = () => {
    const {
        // users,
        friends,
        // isLoading,
        getFriends
    } = useUsers();

    const {currentUser} = useCurrentUser();

    useEffect(() => {
        console.log('Friends Screen');
        getFriends();
    }, [])

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#1F1D1D',
            paddingHorizontal: 25,
            paddingVertical: 15
        }}>
            {friends.filter((user) => user._id !== currentUser._id).map((user) => {
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