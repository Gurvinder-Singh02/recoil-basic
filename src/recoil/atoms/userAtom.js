import { atom } from 'recoil';

export const userAtom = atom({
    key: 'userAtom',
    default: {
        isAuthenticated: false,
        username: '',
        email: ''
    },
}); 