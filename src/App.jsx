import { useRecoilState } from 'recoil';

import { userAtom } from './recoil/atoms/userAtom';
import { postAtom } from './recoil/atoms/postAtom';
import { notificationsAtom } from './recoil/atoms/notificationsAtom';

import { unreadNotificationsSelector } from './recoil/selectors/unreadNotificationsSelector';
import { useRecoilValue } from 'recoil';

const App = () => {

    const [user, setUser] = useRecoilState(userAtom);
    const [posts, setPosts] = useRecoilState(postAtom);
    const [notifications, setNotifications] = useRecoilState(notificationsAtom);
    
    const unreadCount = useRecoilValue(unreadNotificationsSelector);

    const login = () => {
        setUser({ isAuthenticated: true, username: 'john_doe', email: 'john@example.com' });
    };

    const addPost = (content) => {
        setPosts([...posts, { userId: 'john_doe', content, id: posts.length + 1 }]);
    };

    const addNotification = (message) => {

        setNotifications([...notifications, {
            id: Date.now(),
            message,
            read: false,
            timestamp: new Date().toISOString()
        }]);
    };

    const markAsRead = (notificationId) => {
        setNotifications(notifications.map(notif =>
            notif.id === notificationId
                ? { ...notif, read: true }
                : notif
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(notif => ({ ...notif, read: true })));
    };

    return (
        <div>
            <h1>Social Media Platform</h1>
            <h2>User: {user.isAuthenticated ? user.username : 'Not logged in'}</h2>
            <button onClick={login}>Login</button>

            <h3>Posts</h3>
            <button onClick={() => addPost('This is a new post!')}>Add Post</button>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>

            <h3>Notifications</h3>
            <h4>Unread Notifications: {unreadCount}</h4>
            <button onClick={() => addNotification('You have a new comment!')}>Add Notification</button>
            {unreadCount > 0 && (
                <button onClick={markAllAsRead}>Mark All as Read</button>
            )}
            <ul>
                {notifications.map((notif) => (
                    <li key={notif.id}>
                        {notif.message} - {notif.read ? 'Read' : 'Unread'}
                        {!notif.read && (
                            <button
                                onClick={() => markAsRead(notif.id)}
                                style={{ marginLeft: '10px' }}
                            >
                                Mark as Read
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App; 