import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
    Main: NavigatorScreenParams<TabParamList>;
    Chat: {chatId?: string; members?: string[]};
    Settings: undefined
};

export type TabParamList = {
    Messages?: { chatId?: string };
    Friends: undefined;
    Settings: undefined;
};