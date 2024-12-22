import { selector } from 'recoil';
import { postAtom } from '../atoms/postAtom';
import { userAtom } from '../atoms/userAtom';

export const userPostsSelector = selector({
    key: 'userPostsSelector',
    get: ({ get }) => {
        const posts = get(postAtom);
        const user = get(userAtom);
        return posts.filter(post => post.userId === user.username);
    },
}); 