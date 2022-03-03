import React from 'react';
import PosIndex from '.';

import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList/index"



const HomeScreen = () => {
    return (
      <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="home" />
        </div>

        <div class="container col-6">
          <PosIndex/>
        </div>

        <div class="col-2 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
          <PostSummaryList />
        </div>
      </div>
    );
};

export default HomeScreen;
