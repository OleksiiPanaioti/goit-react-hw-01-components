import PropTypes from 'prop-types';
import {
  Card,
  Picture,
  Stats,
  List,
  NumbersSpan,
  TagText,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card className="profile">
      <div className="description">
        <Picture src={avatar} alt="User avatar" className="avatar" />
        <h1 className="name">{username}</h1>
        <TagText className="tag">@{tag}</TagText>
        <TagText className="location">{location}</TagText>
      </div>

      <Stats className="stats">
        <List>
          <span className="label">Followers</span>
          <NumbersSpan className="quantity">{stats.followers}</NumbersSpan>
        </List>
        <List>
          <span className="label">Views</span>
          <NumbersSpan className="quantity">{stats.views}</NumbersSpan>
        </List>
        <List>
          <span className="label">Likes</span>
          <NumbersSpan className="quantity">{stats.likes}</NumbersSpan>
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
