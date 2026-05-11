import { create } from 'zustand';
import { CURRENT_USER } from '../constants/mock.data';
import { User } from '../types/user.type';

const initialState = { currentUser: CURRENT_USER };

type CurrentUserState = typeof initialState & {
    setCurrentUser: (user: User) => void
    reset: () => void
};

const useCurrentUserStore = create<CurrentUserState>()((set) => ({
    ...initialState,
    setCurrentUser: (user) => set({ currentUser: user }),
    reset: () => set(initialState)
}));

export const useCurrentUser = () => {
    const { currentUser, setCurrentUser, reset } = useCurrentUserStore();

    return {
        currentUser,
        setCurrentUser,
        reset
    }
};