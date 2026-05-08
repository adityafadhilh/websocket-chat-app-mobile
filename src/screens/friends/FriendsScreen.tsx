import { Image, Text, TouchableOpacity, View } from "react-native"
import { CURRENT_USER, USERS } from "../../constants/mock.data"
import { FriendItemRow } from "../../components/FriendItemRow"
import { useUsers } from "../../hooks/useUsers"
import { useEffect } from "react"

export const FriendsScreen = () => {
    const {
        users,
        isLoading,
        getUsers
    } = useUsers();

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#1F1D1D',
            paddingHorizontal: 25,
            paddingVertical: 15
        }}>
            {users.filter((user) => user._id !== CURRENT_USER._id).map((user) => {
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