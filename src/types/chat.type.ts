export type HistoryEntry = {
    _id: string;
    to: string;
    from: string;
    message: string;
    sentTime: Date;
}

export type Chat = {
    _id: string;
    members: string[];
    history: HistoryEntry[];
    createdAt: Date;
    updatedAt: Date;
}