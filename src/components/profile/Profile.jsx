import PropTypes from 'prop-types';
import { Card, Picture, Stats, List } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card className="profile">
      <div className="description">
        <Picture src={avatar} alt="User avatar" className="avatar" />
        <h1 className="name">{username}</h1>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats className="stats">
        <List>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </List>
        <List>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </List>
        <List>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </List>
      </Stats>
    </Card>
  );
};

Profile.propType = {
  username: PropTypes.string,
  tag: PropTypes.string,
  localStorage: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(
    PropTypes.shape({
      folowers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};
