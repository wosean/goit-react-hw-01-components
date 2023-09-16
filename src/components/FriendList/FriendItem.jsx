import { PropTypes } from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export function FriendItem({ friend }) {
    const { avatar, name, isOnline } = friend;

    return (
        <li className={css.item}>
            <span
                className={isOnline ? css.statusOnline : css.statusOffline}
            ></span>
            <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p className={css.name}>{name}</p>
        </li>
    );
}

FriendItem.protoType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnlane: PropTypes.bool.isRequired,
};