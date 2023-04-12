import { Profile } from "./Profile";

import { Statistics } from "./Statistics";

import user from "../user.json";

import data from "../data.json";

export const App = () => {
  return (
    <div>
      <div><Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} /></div>
      
      <div>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>
      
    </div>
  );

};
