export type User = {
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    avatar: string;
    online?: boolean;
}