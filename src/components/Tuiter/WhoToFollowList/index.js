import React from 'react';
import WhoToFollowListItem from "./WhoToFollowListItem";
import whos from "./who.json";
import "./whotoFollow.css";

const WhoToFollowList = () => {
  return (
    <ul className={`list-group`}>
      <li className={`list-group-item wd-Web-text-bold`}>Who to follow</li>
      
      {whos.map((who) => {
        return <WhoToFollowListItem who={who} />;
      })}
    </ul>
  );
};
export default WhoToFollowList;
