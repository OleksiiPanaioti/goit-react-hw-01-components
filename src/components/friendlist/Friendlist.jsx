import PropTypes from 'prop-types';

import { ListOfFriends, ItemOfFriends } from './Frienlist.styled';

export const Friendlist = ({ friends }) => {
  return (
    <ListOfFriends className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <ItemOfFriends className="item" key={id} isonline={isOnline}>
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </ItemOfFriends>
      ))}
    </ListOfFriends>
  );
};

Friendlist.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
