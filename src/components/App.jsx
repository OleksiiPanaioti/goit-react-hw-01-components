import { Profile } from './profile/Profile';

import { Layout } from './Layout';

import { Statistics } from './statistics/Statistics';

import { Friendlist } from './friendlist/Friendlist';

import { TransactionHistory } from './transactions/TransactionHistory';

import { GlobalStyle } from './GlobalStyle';

import user from '../user.json';

import data from '../data.json';

import friends from '../friends.json';

import transactions from '../transactions.json';

export const App = () => {
  return (
    <Layout>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>
      <div>
        <Friendlist friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
      <GlobalStyle />
    </Layout>
  );
};
