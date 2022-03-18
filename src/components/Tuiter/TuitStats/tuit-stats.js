import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({post}) => {
  
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', post});
  };
  return (
    <span className={` wd-marg`} onClick={likeTuit}>
      {post.liked && ( // if post.liked is true, then icon heart turn red
        <i className="fas fa-heart me-1" style={{ color: "red" }}></i>
      )}
      {!post.liked && ( // if post.liked is not true, then icon heart
        <i className="far fa-heart me-1"></i>
      )}
      {post.heart}
    </span>
  );
}
export default TuitStats;