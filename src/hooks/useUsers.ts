import { useState } from "react"
import { User } from "../types/user.type"
import { apiRequest } from "../api/apiRequest";
import { CURRENT_USER } from "../constants/mock.data";
import { useCurrentUser } from "./useCurrentUser";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [friends, setFriends] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { currentUser } = useCurrentUser();

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
        console.log('CURRENT_ID: ' + currentUser._id);
        setIsLoading(true);
        try {
            const res = await apiRequest.get('/users/' + currentUser._id + '/friends');
            console.log(res);
            if (res && res.data && res.data.users) {
                console.log('friends: ' + res.data.users);
                setFriends(res.data.users);
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