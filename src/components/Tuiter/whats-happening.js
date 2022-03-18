import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

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
      <textarea // show current whatsHappening in textarea
        value={whatsHappening}
        // if it changes, update whatsHappening
        onChange={(event) => setWhatsHappening(event.target.value)} // with textarea's value
      ></textarea> 
      <button onClick={tuitClickHandler}>Tuit</button>  
    </>
  );
}
export default WhatsHappening;