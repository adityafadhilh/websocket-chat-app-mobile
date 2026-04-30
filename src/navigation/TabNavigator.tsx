import { View, Platform } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { Home, Icon, MessageCircle, Settings, Users } from 'lucide-react-native';
import { FriendsScreen } from '../screens/friends/FriendsScreen';

function MyTabBar({ state, descriptors, navigation }) {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();

    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: '#1F1D1D',
                // borderTopColor: 'gray', 
                // borderTopWidth: 1 
            }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const renderIcon = options.tabBarIcon;

                const activeColor = isFocused ? 'white' : 'gray';

                return (
                    <PlatformPressable
                        key={route.key}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, padding: 10, alignItems: 'center', justifyContent: 'center' }}
                    >
                        {renderIcon && renderIcon({
                            focused: isFocused,
                            color: activeColor,
                            size: 24
                        })}
                        <Text style={{ color: isFocused ? 'white' : 'gray', textAlign: 'center', fontSize: 14 }}>
                            {label}
                        </Text>
                    </PlatformPressable>
                );
            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator tabBar={(props: any) => <MyTabBar {...props} />}>
            <Tab.Screen
                options={{
                    headerShown: true,
                    title: 'Messages',
                    headerStyle: {
                        backgroundColor: '#1F1D1D',
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    // animation: 'shift',
                    tabBarIcon: ({ color }) => <MessageCircle size={28} color={color} />,
                }}
                name="Messages" component={HomeScreen} />
            <Tab.Screen
                options={{
                    headerShown: true,
                    title: 'Friends',
                    headerStyle: {
                        backgroundColor: '#1F1D1D',
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    // animation: 'shift',
                    tabBarIcon: ({ color }) => <Users size={28} color={color} />,
                }}
                name="Friends" component={FriendsScreen} />
            <Tab.Screen
                options={{
                    headerShown: true,
                    title: 'Settings',
                    headerStyle: {
                        backgroundColor: '#1F1D1D',
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    // animation: 'shift',
                    tabBarIcon: ({ color }) => <Settings size={28} color={color} />,
                }}
                name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}