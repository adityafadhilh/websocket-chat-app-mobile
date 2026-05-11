import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { CURRENT_USER } from "../../constants/mock.data"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ChevronsUpDown } from "lucide-react-native"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import BottomSheet, { BottomSheetFlashList, BottomSheetFlatList, BottomSheetView } from "@gorhom/bottom-sheet"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { useUsers } from "../../hooks/useUsers"
import { useCurrentUser } from "../../hooks/useCurrentUser"
import { FriendItemRow } from "../../components/FriendItemRow"
import { User } from "../../types/user.type"

export const SettingsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [indexSheet, setIndexSheet] = useState<number>(-1);

    const {
        users,
        getUsers
    } = useUsers();

    const {
        currentUser, 
        setCurrentUser
    } = useCurrentUser()

    useEffect(() => {
        getUsers();
    }, []);

    const snapPoints = useMemo(() => ["50%", "70%", "80%"], []);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
        setIndexSheet(index);
        console.log('handleSheetChanges', index);
    }, []);

    const handleOpenSheet = () => indexSheet == -1 ? bottomSheetRef.current?.snapToIndex(0) : bottomSheetRef.current?.close();

    const handleSetUser = (u: User) => {
        setCurrentUser(u);
        bottomSheetRef.current?.close()
    };

    return (
        <GestureHandlerRootView style={{
            flex: 1
        }}>
            <View style={{
                flex: 1,
                backgroundColor: '#1F1D1D',
                paddingHorizontal: 25,
                paddingVertical: 15
            }}>
                {/* <Text
                style={{
                    color: 'white',
                }}
            >Switch Account</Text> */}
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 20,
                        alignItems: 'center',
                        // borderBottomWidth: 1,
                        // borderBottomColor: 'gray',
                        // padding: 20,
                        // borderStyle: 'dotted'
                    }}
                    onPress={handleOpenSheet}
                >
                    <Image style={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'white',
                        borderRadius: 25,
                    }} resizeMode="cover" source={currentUser?.avatar ? { uri: currentUser.avatar.replace('/svg', '/png') } : undefined} />
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 18
                        }}>{currentUser?.name}</Text>
                    </View>
                    <ChevronsUpDown size={28} color={'white'} />
                </TouchableOpacity>
            </View>
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
                // index={1}
                enableDynamicSizing={false}
                enablePanDownToClose={true}
                index={-1}
            >
                <BottomSheetFlatList
                    data={users}
                    renderItem={(it) => <FriendItemRow textColor="black" key={it.item._id} user={it.item} onPress={() => handleSetUser(it.item)}/>}
                    keyExtractor={(it) => it._id}
                    style={{ 
                        padding: 20
                     }}
                />
            </BottomSheet>
        </GestureHandlerRootView>
    )
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: 'center',
        backgroundColor: '#1F1D1D',
    },
})