const NavigationSidebar = (active) => {
  return `
             <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->

            <a href="../HomeScreen/home.html" class="list-group-item m list-group-item-action event-target 
            ${
              /* if argument equal to Home then "active will add into the class which highlight blue" also add argument inside the HomeScreen.js*/
              active === "Home" ? "active" : ""
            }" 
            ><i class="fas fa-home"
              ><p class="wd-left-bar-text d-none d-xl-block d-xxl-block ms-4">
                Home
              </p></i
            ></a>

            <a
            href="../ExploreScreen/explore.html"
            class="list-group-item m list-group-item-action event-target 
            ${
              /* if argument equal to explore then "active will add into the class which highlight blue" also add argument inside the explore Screen.js */
              active === "Explore" ? "active" : ""
            }"
            aria-current="true"
            ><i class="fas fa-hashtag "
              ><p class="wd-left-bar-text d-none d-xl-block d-xxl-block ms-4 ">
                Explore
              </p></i
            ></a>

            <a href="#" class="list-group-item m list-group-item-action event-target"
            ><i class="fas fa-bell"
              ><p class="wd-left-bar-text d-none d-xl-block d-xxl-block ms-4">
                Notifications
              </p></i
            ></a>

            <a href="#" class="list-group-item m list-group-item-action event-target" 
            ><i class="fas fa-envelope"
              ><p class="wd-left-bar-text d-none d-xl-block d-xxl-block ms-4">
                Messages
              </p></i
            ></a
          >
          <a href="#" class="list-group-item m list-group-item-action event-target" 
            ><i class="fas fa-bookmark"
              ><p class="wd-left-bar-text d-none d-xl-block d-xxl-block ms-4">
                Bookmarks
              </p></i
            ></a
          >
          <a href="#" class="list-group-item m list-group-item-action event-target" 
            ><i class="fas fa-list"
              ><p class="wd-left-bar-text d-none d-xl-block d-xxl-block ms-4">
                Lists
              </p></i
            ></a>
          
          <a href="#" class="list-group-item m list-group-item-action event-target" 
            ><i class="fas fa-user"
              ><p class="wd-left-bar-text d-none d-xl-block d-xxl-block ms-4">
                Profile
              </p></i
            ></a>
          
          <a href="#" class="list-group-item m list-group-item-action event-target"
            ><i class="fas fa-comment-dots"
              ><p class="wd-left-bar-text d-none d-xl-block d-xxl-block ms-4">
                More
              </p></i
            ></a>
          
          

            
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>

    `;
};
export default NavigationSidebar;
