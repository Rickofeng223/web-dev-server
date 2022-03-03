import React from "react";
import "./post.css";
const PostItem = ({
  post = {
  "avatarIcon": "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    "userName": "CNN Post",
    "handle": " @CNNPost",
    "time": " - 20h",
    "title":
      "Team USA will reportedly receive Olympic torches in lieu of medals until Kamila Valieva case resolved",
    "missionText": "",
    "keyWordHighlight": "trib.al/nx2Gfaq",
    "cardImage":
      "https://stillmed.olympics.com/media/Images/News/2021/09/2021-09-08-Beijing-featured.jpg",
    "cardTitle": "",
    "cardText": "",
    "From": "",
    "comment": "9655",
    "retweet": "2.4K",
    "heart": "42K"
  }
}) => {
  return (
    <li className={`list-group-item wd-backGround`}>
      <div className={`wd-container `}>
        <div className={`wd-left-element`}>
          <img
            className={`wd-round-rad wd-left-element-img`}
            src={post.avatarIcon}
          ></img>
        </div>
        <div className={`wd-right-element`}>
          <p>
            {post.userName} <i class="fas fa-check-circle"></i>
            {post.handle} {post.time}{" "}
            <i className={`fas fa-ellipsis-h wd-dot`}></i>
          </p>
          <p className={`d-relat`}>
            {post.title}

            <span className={`text-primary`}>{post.keyWordHighlight}</span>
            {post.missionText}
          </p>
        </div>
      </div>

      <div
        className={`card wd-right-element wd-relat`}
        style={{ width: "80%" }}
      >
        <img src={post.cardImage} class={`card-img-top wd-bord-round`} />
        <div
          className={`card-body wd-backGround wd-bord-round ${post.cardTitle ==='' ? 'wd-vis' : ''}`} 
        >
          <h5 className={`card-title`}>{post.cardTitle}</h5>
          <p className={`card-text text-muted`}>{post.cardText}</p>
          <i className={`fas fa-link text-muted`}> {post.From}</i>
        </div>
      </div>

      <div className={`wd-right-element wd-paddings`}>
        <a href="#" className={`wd-link wd-marg`}>
          <i className={`far fa-comment wd-icon-adjust`}></i>
          {post.comment}
        </a>
        <a href="#" className={`wd-link wd-marg`}>
          <i className={`fas fa-retweet wd-icon-adjust`}></i>
          {post.retweet}
        </a>
        <a href="#" className={`wd-link wd-marg`}>
          <i className={`fas fa-heart wd-red-heart`}></i>
          {post.heart}
        </a>
        <a href="#" className={`wd-link wd-marg`}>
          <i className={`fas fa-upload`}></i>
        </a>
      </div>
    </li>
  );
};
export default PostItem;

