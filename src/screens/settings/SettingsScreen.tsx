import { Image, Text, TouchableOpacity, View } from "react-native"
import { CURRENT_USER } from "../../constants/mock.data"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ChevronsUpDown } from "lucide-react-native"

export const SettingsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
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
            >
                <Image style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'white',
                    borderRadius: 25,
                }} resizeMode="cover" source={CURRENT_USER?.avatar ? { uri: CURRENT_USER.avatar.replace('/svg', '/png') } : undefined} />
                <View style={{
                    flex: 1,
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18
                    }}>{CURRENT_USER?.name}</Text>
                </View>
                <ChevronsUpDown size={28} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}