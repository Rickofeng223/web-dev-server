import NavigationSidebar from "../NavigationSidebar/index.js";
import posts from "../PostSummaryList/index.js"
import posIndex from "./index.js";

(function ($) {
  $("#wd-home").append(`
    <div class="row mt-2">
    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar("Home")}       
    </div>
    <div class="container col-6">
        ${posIndex()}
    </div>
    <div class="col-2 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
            ${posts()}
    </div>
    
    </div>
    `);
})($);

const handleEventTarget = (event) => {
  const target = event.target;
  console.log(target);
  $(target).css("background-color", "blue").css("color", "white");
};
const eventTarget = $("#event-target");
eventTarget.click(handleEventTarget);
