import post from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
            <div class="row">
                       <!-- search field and cog -->
            <div class="wd-search-div-margin ">
          <i class="fas fa-search  wd-glas"></i>
          <!--wd-border-left on the bottom class-->
          <input class="wd-search wd-line-background text-dark" type="search" placeholder="Search Twitter" />
          <a href="explore-settings.html wd-gear-icon">
            <i class="fas fa-cog wd-gear" style="font-size: 2em"></i>
          </a>
        </div>
           </div>


           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
            
          <li class="nav-item">
            <a class="nav-link active" href="#">For you</a>
          </li>
          <li class="nav-item"><a class="nav-link wd-text-colr" href="#">Trending</a></li>
          <li class="nav-item"><a class="nav-link wd-text-colr" href="#">News</a></li>
          <li class="nav-item"><a class="nav-link wd-text-colr" href="#">Sports</a></li>
          <li class="nav-item">
            <a class="nav-link d-none d-sm-none d-md-block wd-text-colr" href="#"
              >Entertainment</a
            >
          </li>
           </ul>


           <!-- image with overlaid text -->

           <div class="card mt-2 wd-color-back-b">
          <img
            class="card-img-top "
            src="https://static.tweaktown.com/news/8/4/84438_01_elon-musk-giving-update-on-spacexs-starship-mars-rocket-thursday.jpg"
            alt="starship"
          />
          <div class="card-body wd-text-infront">
            <h5 class="card-title h2 text-muted">SpaceX's Starship</h5>
          </div>
        </div>

        ${post()}
    `;
};
export default ExploreComponent;
