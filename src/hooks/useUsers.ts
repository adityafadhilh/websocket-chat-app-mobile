import { useState } from "react"
import { User } from "../types/user.type"
import { apiRequest } from "../api/apiRequest";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const getUsers = async () => {
        setIsLoading(true);
        try {
            const res = await apiRequest.get('/users');
            if (res && res.data && res.data.users) {
                console.log(res.data.users);
                setUsers(res.data.users);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        users,
        isLoading,
        getUsers
    }
};