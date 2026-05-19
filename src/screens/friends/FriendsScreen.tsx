import { Image, Text, TouchableOpacity, View } from "react-native"
import { FriendItemRow } from "../../components/FriendItemRow"
import { useUsers } from "../../hooks/useUsers"
import { useEffect } from "react"
import { useCurrentUser } from "../../hooks/useCurrentUser"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../navigation/navigation.type"
import { useChats } from "../../hooks/useChats"

export const FriendsScreen = () => {
    const {
        // users,
        friends,
        // isLoading,
        getFriends
    } = useUsers();

    const {currentUser} = useCurrentUser();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        console.log('Friends Screen');
        getFriends();
    }, [])

    useEffect(() => {
        console.log('Friends Screen');
        getFriends();
    }, [currentUser._id])

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
                        onPress={() => { navigation.navigate('Chat', {
                            members: [currentUser._id, user._id]
                        })}} />
                )
            })}
        </View>
    )
}