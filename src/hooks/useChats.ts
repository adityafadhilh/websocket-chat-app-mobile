import { useState } from "react";
import { apiRequest } from "../api/apiRequest";
import { CURRENT_USER } from "../constants/mock.data";
import { Chat } from "../types/chat.type";

export const useChats = () => {
    const [chat, setChat] = useState<Chat>();
    const [chats, setChats] = useState<Chat[]>([]);

    const getChats = async () => {
        try {
            const res = await apiRequest.get('/chats/user/' + CURRENT_USER._id);
            console.log(res);
            if (res && res.data && res.data.chats) {
                console.log('chats: ' + JSON.stringify(chats));
                setChats(res.data.chats);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getChatById = async (chatId: string) => {
        try {
            console.log('chatById');
            const res = await apiRequest.get('/chats/' + chatId);
            console.log(res);
             if (res && res.data && res.data.chat) {
                setChat(res.data.chat);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return {
        getChats,
        getChatById,
        chats,
        chat
    };
}