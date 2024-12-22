import { selector } from 'recoil';
import { notificationsAtom } from '../atoms/notificationsAtom';

export const unreadNotificationsSelector = selector({
    key: 'unreadNotificationsSelector',
    get: ({ get }) => {
        const notifications = get(notificationsAtom);
        return notifications.filter(notification => !notification.read).length;
    },
}); 