import React from "react";

const PostSummaryItem = ({
  post = {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "- 2h",
    "image":
      "https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png",
    "title":
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
  },
}) => {
  return (
    <li className={`list-group-item`}>
      <h6 className={`text-muted`}>{post.topic}</h6>
      <p className={`wd-Web-text-bold wd-text-whitee`}>
        {post.userName} <i className={`fas fa-check-circle`}></i> {post.time}
      </p>
      <p
        className={`wd-marg wd-Web-text-bold  col-4 col-sm-6 col-md-8 col-lg-6 col-xl-8 col-xxl-9 wd-text-whitee`}
      >
        {post.title}
      </p>
      <img
        src={post.image}
        className={`wd-img wd-img-set`}
        alt="post"
      />
      <p className={` wd-marg`}>123K Tweets</p>
    </li>
  );
};
export default PostSummaryItem;
