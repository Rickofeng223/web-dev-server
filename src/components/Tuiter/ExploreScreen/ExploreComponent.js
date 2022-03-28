import React from 'react';
import PostSummaryList from "../PostSummaryList";
const ExploreComponent = () => {
  return (
    <>
      <div className={`row`}>
        <div className={`wd-search-div-margin `}>
          <i className={`fas fa-search  wd-glas`}></i>

          <input
            className={`wd-search wd-line-background text-dark" type="search" placeholder="Search Twitter`}
          />
          <a href="explore-settings.html wd-gear-icon">
            <i className={`fas fa-cog wd-gear`} style={{"fontSize": "2em"}}></i>
          </a>
        </div>
      </div>

      <ul className={`nav mb-2 nav-tabs`}>
        <li className={`nav-item`}>
          <a className={`nav-link active`} href="/#">
            For you
          </a>
        </li>
        <li className={`nav-item`}>
          <a className={`nav-link wd-text-colr`} href="/#">
            Trending
          </a>
        </li>
        <li className={`nav-item`}>
          <a className={`nav-link wd-text-colr`} href="/#">
            News
          </a>
        </li>
        <li className={`nav-item`}>
          <a className={`nav-link wd-text-colr`} href="/#">
            Sports
          </a>
        </li>
        <li className={`nav-item`}>
          <a
            className={`nav-link d-none d-sm-none d-md-block wd-text-colr`}
            href="/#"
          >
            Entertainment
          </a>
        </li>
      </ul>

      <div className={`card mt-2 wd-color-back-b`}>
        <img
          className={`card-img-top `}
          src="https://static.tweaktown.com/news/8/4/84438_01_elon-musk-giving-update-on-spacexs-starship-mars-rocket-thursday.jpg"
          alt="starship"
        />
        <div className={`card-body wd-text-infront`}>
          <h5 className={`card-title h2 `}>SpaceX's Starship</h5>
        </div>
      </div>

      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;
