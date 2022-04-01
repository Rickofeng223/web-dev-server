import React, { useEffect } from "react";
import TuitListItem from "./tuit-list-item";
import { useSelector, useDispatch } from "react-redux";
//import * as service from "../../../full-stack-developer-server-node/services/tuits-service";
import { findAllTuits } from "../../../full-stack-developer-server-node/actions/tuits-actions";
import "./tuits.css";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch),[]);
  // const findAllTuits = async () => {
  //   const tuits = await service.findAllTuits();
  //   const action = {
  //     type: "FIND_ALL_TUITS",
  //     tuits: tuits,
  //   };
  
  //   dispatch(action);
  // }
  //   useEffect(findAllTuits, []);
    return (
      <ul className="ttr-tuits list-group">
        {tuits.map &&
          tuits.map((post, key) => {
            return <TuitListItem post={post} key={key} />;
          })}
      </ul>
    );
  };

export default TuitList;
