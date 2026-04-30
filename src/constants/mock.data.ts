import { Chat } from "../types/chat.type";
import { User } from "../types/user.type";

export const CURRENT_USER: User = {
    _id: "6650000000000000000000aa",
    name: "Aditya Fadhil",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=me&backgroundColor=b6e3f4",
    online: true,
    createdAt: new Date("2024-01-01T08:00:00Z"),
    updatedAt: new Date("2024-01-01T08:00:00Z"),
};

export const USERS: User[] = [
    {
        _id: "6650000000000000000000a1",
        name: "Nick",
        avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=nick&backgroundColor=c0aede",
        online: true,
        createdAt: new Date("2024-01-02T09:00:00Z"),
        updatedAt: new Date("2024-05-10T14:08:00Z"),
    },
    {
        _id: "6650000000000000000000a2",
        name: "Jack",
        avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=jack&backgroundColor=ffdfbf",
        online: false,
        createdAt: new Date("2024-01-03T10:00:00Z"),
        updatedAt: new Date("2024-05-10T15:10:00Z"),
    },
    {
        _id: "6650000000000000000000a3",
        name: "Richard",
        avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=richard&backgroundColor=d1f4d9",
        online: true,
        createdAt: new Date("2024-01-04T11:00:00Z"),
        updatedAt: new Date("2024-05-10T16:00:00Z"),
    },
    {
        _id: "6650000000000000000000a4",
        name: "Sarah",
        avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=sarah&backgroundColor=ffd5dc",
        online: false,
        createdAt: new Date("2024-01-05T12:00:00Z"),
        updatedAt: new Date("2024-05-10T12:30:00Z"),
    },
    {
        _id: "6650000000000000000000a5",
        name: "Mike",
        avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=mike&backgroundColor=b6e3f4",
        online: true,
        createdAt: new Date("2024-01-06T13:00:00Z"),
        updatedAt: new Date("2024-05-10T11:00:00Z"),
    },
    {
        _id: "6650000000000000000000aa",
        name: "Aditya Fadhil",
        avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=me&backgroundColor=b6e3f4",
        online: true,
        createdAt: new Date("2024-01-01T08:00:00Z"),
        updatedAt: new Date("2024-01-01T08:00:00Z"),
    }
];

export const CHATS: Chat[] = [
    {
        _id: "6660000000000000000000c1",
        members: [CURRENT_USER._id, "6650000000000000000000a1"],
        createdAt: new Date("2024-05-10T14:00:00Z"),
        updatedAt: new Date("2024-05-10T14:13:00Z"),
        history: [
            { _id: "6670000000000000000000e1", from: "6650000000000000000000a1", to: CURRENT_USER._id, message: "Hey man, I wanted to ask you about something?", sentTime: new Date("2024-05-10T14:08:00Z") },
            { _id: "6670000000000000000000e2", from: CURRENT_USER._id, to: "6650000000000000000000a1", message: "How are you?", sentTime: new Date("2024-05-10T14:10:00Z") },
            { _id: "6670000000000000000000e3", from: "6650000000000000000000a1", to: CURRENT_USER._id, message: "I'm doing great! Just wanted to check in.", sentTime: new Date("2024-05-10T14:12:00Z") },
            { _id: "6670000000000000000000e4", from: CURRENT_USER._id, to: "6650000000000000000000a1", message: "Same here, what's up?", sentTime: new Date("2024-05-10T14:13:00Z") },
        ],
    },
    {
        _id: "6660000000000000000000c2",
        members: [CURRENT_USER._id, "6650000000000000000000a2"],
        createdAt: new Date("2024-05-10T15:00:00Z"),
        updatedAt: new Date("2024-05-10T15:12:00Z"),
        history: [
            { _id: "6670000000000000000000e5", from: "6650000000000000000000a2", to: CURRENT_USER._id, message: "Nice Job!", sentTime: new Date("2024-05-10T15:10:00Z") },
            { _id: "6670000000000000000000e6", from: CURRENT_USER._id, to: "6650000000000000000000a2", message: "Thanks a lot! Really appreciate it.", sentTime: new Date("2024-05-10T15:11:00Z") },
            { _id: "6670000000000000000000e7", from: "6650000000000000000000a2", to: CURRENT_USER._id, message: "You totally nailed the presentation today.", sentTime: new Date("2024-05-10T15:12:00Z") },
        ],
    },
    {
        _id: "6660000000000000000000c3",
        members: [CURRENT_USER._id, "6650000000000000000000a3"],
        createdAt: new Date("2024-05-10T16:00:00Z"),
        updatedAt: new Date("2024-05-10T16:01:00Z"),
        history: [
            { _id: "6670000000000000000000e8", from: "6650000000000000000000a3", to: CURRENT_USER._id, message: "Welcome", sentTime: new Date("2024-05-10T16:00:00Z") },
            { _id: "6670000000000000000000e9", from: CURRENT_USER._id, to: "6650000000000000000000a3", message: "Thank you! Happy to be here.", sentTime: new Date("2024-05-10T16:01:00Z") },
        ],
    },
    {
        _id: "6660000000000000000000c4",
        members: [CURRENT_USER._id, "6650000000000000000000a4"],
        createdAt: new Date("2024-05-10T12:00:00Z"),
        updatedAt: new Date("2024-05-10T12:30:00Z"),
        history: [
            { _id: "6670000000000000000000ea", from: CURRENT_USER._id, to: "6650000000000000000000a4", message: "Are we still on for tomorrow?", sentTime: new Date("2024-05-10T12:28:00Z") },
            { _id: "6670000000000000000000eb", from: "6650000000000000000000a4", to: CURRENT_USER._id, message: "See you tomorrow!", sentTime: new Date("2024-05-10T12:30:00Z") },
        ],
    },
    {
        _id: "6660000000000000000000c5",
        members: [CURRENT_USER._id, "6650000000000000000000a5"],
        createdAt: new Date("2024-05-10T10:55:00Z"),
        updatedAt: new Date("2024-05-10T11:00:00Z"),
        history: [
            { _id: "6670000000000000000000ec", from: CURRENT_USER._id, to: "6650000000000000000000a5", message: "Let's grab lunch sometime.", sentTime: new Date("2024-05-10T10:58:00Z") },
            { _id: "6670000000000000000000ed", from: "6650000000000000000000a5", to: CURRENT_USER._id, message: "That sounds great 👍aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", sentTime: new Date("2024-05-10T11:00:00Z") },
        ],
    },
];