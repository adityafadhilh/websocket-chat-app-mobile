import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home";
import { ChatScreen } from "../screens/chat/ChatScreen";
import { SettingsScreen } from "../screens/settings/SettingsScreen";
import { TabNavigator } from "./TabNavigator";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
    return (
        <RootStack.Navigator initialRouteName="Main">
            <RootStack.Screen
                options={{
                    headerShown: false
                }} name="Main"
                component={TabNavigator} />
            <RootStack.Screen options={{
                headerShown: false,
                // headerBackVisible: true,
                // headerTitle: 'Message'
            }} name="Chat" component={ChatScreen} />
            <RootStack.Screen name="Settings" component={SettingsScreen} />
        </RootStack.Navigator>
    )
};