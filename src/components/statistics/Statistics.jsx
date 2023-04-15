import PropTypes from 'prop-types';

import { Section, ListStat, ItemStat } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && (
        <h2 className="title" title={title}>
          {title}
        </h2>
      )}
      <ListStat className="stat-list">
        {stats.map(stat => (
          <ItemStat className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </ItemStat>
        ))}
      </ListStat>
    </Section>
  );
};

Statistics.propType = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
