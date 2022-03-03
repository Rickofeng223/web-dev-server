import React from "react";
import { Link } from "react-router-dom";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

import NavigationSidebar from "./NavigationSidebar";
import PostSummaryList from "./PostSummaryList";
import WhoToFollowList from "./WhoToFollowList";  



const Tuiter = () => {
  return (
    <>
      <h1>Tuiter!!!</h1>
      <Link to="/hello">Hello</Link> |<Link to="/">Labs</Link>
      <NavigationSidebar active="Explore" />
      <br/>
      <WhoToFollowList />
      <br/>
      <PostSummaryList/>
      <ExploreComponent/>
      <ExploreScreen/>
    </>
  );
};

export default Tuiter;
