import React from "react";
import { Link } from "react-router-dom";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
  return (
    <>
      <Link to="/">Back to Lab</Link>
      <div className={`row mt-2`}>
      

        <div className={`container`} style={{ position: "relative" }}>
          <ExploreComponent />
        </div>
        
      </div>
    </>
  );
};
export default ExploreScreen;


// <div className={`row mt-2`}>
//   <div className={`col-2 col-md-2 col-lg-1 col-xl-2`}>
//     <NavigationSidebar active="explore" />
//   </div>

//   <div className={`container col-6`} style={{ position: "relative" }}>
//     <ExploreComponent />
//   </div>
//   <div className={`col-2 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4`}>
//     <WhoToFollowList />
//   </div>
// </div>;