import React from "react";
const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className={`list-group`}>
        <a className={`list-group-item"`} href="/">
          <i className={`fab fa-twitter"`}></i>
        </a>

        <a
          href="../HomeScreen/home.html"
          className={`list-group-item m list-group-item-action event-target 
            ${active === "Home" ? "active" : ""}`}
        >
          <i className={`fas fa-home`}>
            <p
              className={`wd-left-bar-text d-none d-xl-block d-xxl-block ms-4`}
            >
              Home
            </p>
          </i>
        </a>

        <a
          href="../ExploreScreen/explore.html"
          className={`list-group-item m list-group-item-action event-target 
            ${active === "Explore" ? "active" : ""}`}
          aria-current="true"
        >
          <i className={`fas fa-hashtag`}>
            <p
              className={`wd-left-bar-text d-none d-xl-block d-xxl-block ms-4`}
            >
              Explore
            </p>
          </i>
        </a>

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
