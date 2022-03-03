import React from "react";
import "./whotoFollow.css";

const WhoToFollowListItem = ({
  who = {
    avatarIcon:
      "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
    userName: "NASA",
    handle: "@NASA",
  },
}) => {
  return (
    <li className={`list-group-item`}>
      <div className={`wd-float`}>
        <img className={`wd-explore-avatar`} src={who.avatarIcon}></img>
      </div>

      <div className={`wd-follow-text-mar wd-float wd-z-in`}>
        <h6 className={`wd-Web-text-bold`}>
          {who.userName}
          <i className={`fas fa-check-circle`}></i>
        </h6>

        <p className={`wd-marg-t wd-text-whitee`}>{who.handle}</p>
      </div>

      <button className={`btn btn-primary rounded-pill wd-button-follow`}>
        Follow
      </button>
    </li>
  );
};

export default WhoToFollowListItem;
