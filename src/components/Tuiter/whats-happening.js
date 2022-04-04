import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTuit } from "../../full-stack-developer-server-node/actions/tuits-actions";
import "../Tuiter/HomeScreen/"
const WhatsHappening = () => {
  //let [whatsHappening, setWhatsHappening] = useState(""); // create whatsHappening state variable
  const dispatch = useDispatch();
  const [newTuit, setNewTuit] = useState({ tuit: "New tuit" });
  // const tuitClickHandler = () => {
  //   // handle tuit button click
  //   console.log(whatsHappening); // just print whatsHappening
  //    const action = {
  //     type: "create-tuit",
  //     tuit: whatsHappening ,
  //   };
  //   dispatch(action)
  // }; // state variable for now
  return (
    <>
      <div className="input-group-prepend">
        {/* <img
          className={`wd-round-rad`}
          alt="avatar"
          src={
            "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          }
        ></img> */}
        <textarea
          className={"form-control w-75"}
          onChange={(e) => setNewTuit({ ...newTuit, tuit: e.target.value })}
        ></textarea>
      </div>
      <button
        onClick={() => createTuit(dispatch, newTuit)}
        className={"btn btn-primary float-end"}
      >
        Tuit
      </button>
      <br></br>
      <i className="fas fa-image ms-3"></i>
      <i className="fab fa-ups ms-3"></i>
      <i className="fas fa-smile ms-3"></i>
      <i className="fas fa-box-alt ms-3"></i>
    </>
  );
}
export default WhatsHappening;