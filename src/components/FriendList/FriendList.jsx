import FriendListItem from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import css from './FriendList.module.css'

const FriendList = ({friends}) => (
    <ul className={css.friend_list}>
        {
            friends.map(friend => {
                return <FriendListItem 
                    key={friend.id} 
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}/>
            })
        }
  
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.array
}

export default FriendList;