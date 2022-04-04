import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit, updateTuit } from "../../../full-stack-developer-server-node/actions/tuits-actions";

import "./tuits.css";
const TuitListItem = ({post}) => {
  const dispatch = useDispatch(); // get dispatcher to send message to reducer
  // const deleteTuit = (post) => {
  //   // handle delete tuit click event
  //   const action = {
  //     // notify redux reducer with delete-tuit event and deleted tuit
  //     type: "delete-tuit",
  //     post,
  //   };
  //   dispatch(action);
  // };
  //const [newTuit, setNewTuit] =  useState({tuit: 'New tuit'});
  return (
    <div>
      <li className={`list-group-item wd-backGround`}>
        <i
          className={"fas fa-times float-end"}
          onClick={() => deleteTuit(dispatch, post)} // call from tuits-action.js
        ></i>

        <h5 className={`card-title`}>{post.tuit}</h5>
        {/* <button
          onClick={() => createTuit(dispatch, newTuit)}
          className={"btn btn-primary float-end"}
        >
          Tuit
        </button> */}
        {/* <textarea
          className={"form-control w-75"}
          onChange={(e) => setNewTuit({ ...newTuit, tuit: e.target.value })}
        ></textarea> */}
        <div>
          Likes: {post.likes}
          <i
            onClick={() =>
              updateTuit(dispatch, {
                ...post,
                likes: post.likes + 1,
              })
            }
            className="far fa-thumbs-up ms-2"
          ></i>
        </div>
        <div>
          DisLikes: {post.dislikes}
          <i
            onClick={() =>
              updateTuit(dispatch, {
                ...post,
                dislikes: post.dislikes - 1,
              })
            }
            className="far fa-thumbs-down ms-2"
          ></i>
        </div>
      </li>
    </div>
  );
};
export default TuitListItem;


//  return (
//     <li className={`list-group-item wd-backGround`}>
//       <i
//         onClick={() => deleteTuit(post)}
//         className="fas fa-times 
//                   fa-pull-right"
//       ></i>
//       <div className={`wd-container `}>
//         <div className={`wd-left-element`}>
//           <img
//             className={`wd-round-rad wd-left-element-img`}
//             alt="avatar"
//             src={post.avatarIcon}
//           ></img>
//         </div>
//         <div className={`wd-right-element`}>
//           <p>
//             {post.userName} <i class="fas fa-check-circle"></i>
//             {post.handle} {post.time}{" "}
//           </p>
//           <p className={`d-relat`}>
//             {post.title}

//             <span className={`text-primary`}>{post.keyWordHighlight}</span>
//             {post.missionText}
//           </p>
//         </div>
//       </div>

//       <div
//         className={`card wd-right-element wd-relat`}
//         style={{ width: "80%" }}
//       >
//         <img
//           src={post.cardImage}
//           class={`card-img-top wd-bord-round`}
//           alt="card"
//         />
//         <div
//           className={`card-body wd-backGround wd-bord-round ${
//             post.cardTitle === "" ? "wd-vis" : ""
//           }`}
//         >
//           <h5 className={`card-title`}>{post.tuit}</h5>
//           <p className={`card-text text-muted`}>{post.cardText}</p>
//         </div>
//       </div>

//       <div className={`wd-right-element wd-paddings`}>
//         <a href="/#" className={`wd-link wd-marg`}>
//           <i className={`far fa-comment wd-icon-adjust`}></i>
//           {post.comment}
//         </a>
//         <a href="/#" className={`wd-link wd-marg`}>
//           <i className={`fas fa-retweet wd-icon-adjust`}></i>
//           {post.retweet}
//         </a>

//         <TuitStats post={post} />

//         <a href="/#" className={`wd-link wd-marg`}>
//           <i className={`fas fa-upload`}></i>
//         </a>
//       </div>
//     </li>
//   );
// };
// export default TuitListItem;
