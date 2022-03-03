import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className={`list-group`}>
        <Link to="/"

         className={`list-group-item"`}>
          <i className={`fab fa-twitter"`}></i>
        
        </Link>
         <Link to="/tuiter/home"

          href="../HomeScreen/home.html"
          className={`list-group-item m list-group-item-action event-target 
            ${active === "home" ? "active" : ""}`}
        >
          <i className={`fas fa-home`}>
            <p
              className={`wd-left-bar-text d-none d-xl-block d-xxl-block ms-4`}
            >
              Home
            </p>
          </i>
        </Link>

        <Link to="/tuiter/explore"
          href="../ExploreScreen/explore.html"
          className={`list-group-item m list-group-item-action event-target 
            ${active === "explore" ? "active" : ""}`}
          aria-current="true"
        >
          <i className={`fas fa-hashtag`}>
            <p
              className={`wd-left-bar-text d-none d-xl-block d-xxl-block ms-4`}
            >
              Explore
            </p>
          </i>
        </Link>

        <a
          href="#"
          className={`list-group-item m list-group-item-action event-target`}
        >
          <i className={`fas fa-bell`}>
            <p
              className={`wd-left-bar-text d-none d-xl-block d-xxl-block ms-4`}
            >
              Notifications
            </p>
          </i>
        </a>

        <a
          href="#"
          className={`list-group-item m list-group-item-action event-target`}
        >
          <i className={`fas fa-envelope`}>
            <p
              className={`wd-left-bar-text d-none d-xl-block d-xxl-block ms-4`}
            >
              Messages
            </p>
          </i>
        </a>
        <a
          href="#"
          className={`list-group-item m list-group-item-action event-target`}
        >
          <i className={`fas fa-bookmark`}>
            <p
              className={`wd-left-bar-text d-none d-xl-block d-xxl-block ms-4`}
            >
              Bookmarks
            </p>
          </i>
        </a>
        <a
          href="#"
          className={`list-group-item m list-group-item-action event-target`}
        >
          <i className={`fas fa-list`}>
            <p
              className={`wd-left-bar-text d-none d-xl-block d-xxl-block ms-4`}
            >
              Lists
            </p>
          </i>
        </a>

        <a
          href="#"
          className={`list-group-item m list-group-item-action event-target`}
        >
          <i className={`fas fa-user`}>
            <p
              className={`wd-left-bar-text d-none d-xl-block d-xxl-block ms-4`}
            >
              Profile
            </p>
          </i>
        </a>

        <a
          href="#"
          className={`list-group-item m list-group-item-action event-target`}
        >
          <i className={`fas fa-comment-dots`}>
            <p
              className={`wd-left-bar-text d-none d-xl-block d-xxl-block ms-4`}
            >
              More
            </p>
          </i>
        </a>
      </div>
      <div className={`d-grid mt-2`}>
        <a
          href="tweet.html"
          className={`btn btn-primary btn-block rounded-pill`}
        >
          Tweet
        </a>
      </div>
    </>
  );
};
export default NavigationSidebar;
