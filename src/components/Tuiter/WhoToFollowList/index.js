import React from 'react';
import WhoToFollowListItem from "./WhoToFollowListItem";

import "./whotoFollow.css";
import { useSelector } from 'react-redux';   // import hook to retrieve state from reducer
  
const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return (
    <div>
      
          <ul className={`list-group`}>
          <li className={`list-group-item wd-Web-text-bold`}>Who to follow</li>
          
          {who.map((event) => {
            return <WhoToFollowListItem who={event} key={event.userName}/>;
          })}
        </ul>
    </div>
  );
};
export default WhoToFollowList;

    // <ul className={`list-group`}>
    //   <li className={`list-group-item wd-Web-text-bold`}>Who to follow</li>
      
    //   {whos.map((who) => {
    //     return <WhoToFollowListItem who={who} key={who.userName}/>;
    //   })}
    // </ul>