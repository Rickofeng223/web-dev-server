import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../Tuiter/HomeScreen/"
const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState(""); // create whatsHappening state variable
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    // handle tuit button click
    console.log(whatsHappening); // just print whatsHappening
     const action = {
      type: "create-tuit",
      tuit: whatsHappening ,
    };
    dispatch(action)
  }; // state variable for now
  return (
    <>
      <div className="input-group-prepend">
        <img
          className={`wd-round-rad`}
          alt="avatar"
          src={
            "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          }
        ></img>
        <textarea // show current whatsHappening in textarea
          value={whatsHappening}
          // if it changes, update whatsHappening
          onChange={(event) => setWhatsHappening(event.target.value)} // with textarea's value
        ></textarea>
      </div>
      <br></br>
      <i className="fas fa-image ms-3"></i>
      <i className="fab fa-ups ms-3"></i>
      <i className="fas fa-smile ms-3"></i>
      <i className="fas fa-box-alt ms-3"></i>
      <button
        className="btn btn-primary btn-block rounded-pill "
        onClick={tuitClickHandler}
      >
        Tuit
      </button>
    </>
  );
}
export default WhatsHappening;