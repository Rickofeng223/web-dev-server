import React from "react";
import TuitListItem from "./tuit-list-item";
import { useSelector } from "react-redux";
import "./tuits.css";

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);
  return (
    <ul className="ttr-tuits list-group">
      {tuits.map &&
        tuits.map((post) => {
          return <TuitListItem post={post} key={post.id} />;
        })}
    </ul>
  );
};

export default TuitList;