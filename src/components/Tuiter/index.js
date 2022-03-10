import React from "react";
import { Link } from "react-router-dom";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";

import NavigationSidebar from "./NavigationSidebar";
import PostSummaryList from "./PostSummaryList";
import WhoToFollowList from "./WhoToFollowList";  



const Tuiter = () => {
  return (
    <>
      <h1>A6 Tuiter!!!</h1>
      <Link to="/hello">Hello</Link> | <Link to="/">Labs</Link> |{" "}
      <Link to="/tuiter/explore">Explore</Link> |{" "}
      <Link to="/tuiter/home">Home</Link>
      <NavigationSidebar active="explore" />
      <br />
      <WhoToFollowList />
      <br />
      <PostSummaryList />
      <ExploreComponent />
      <ExploreScreen />
      <HomeScreen />
    </>
  );
};

export default Tuiter;
