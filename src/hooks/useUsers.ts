import { useState } from "react"
import { User } from "../types/user.type"
import { apiRequest } from "../api/apiRequest";
import { CURRENT_USER } from "../constants/mock.data";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [friends, setFriends] = useState<User[]>([]);
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

    const getFriends = async () => {
        console.log("getFriends");
        console.log('CURRENT_ID: ' + CURRENT_USER._id);
        setIsLoading(true);
        try {
            const res = await apiRequest.get('/users/' + CURRENT_USER._id + '/friends');
            console.log(res);
            if (res && res.data && res.data.users && res.data.users.friends_details) {
                console.log('friends: ' + res.data.users.friends_details);
                setFriends(res.data.users.friends_details);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        users,
        friends,
        isLoading,
        getUsers,
        getFriends
    }
};