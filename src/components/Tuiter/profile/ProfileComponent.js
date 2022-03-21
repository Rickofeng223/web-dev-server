import React from "react";
import { useSelector } from "react-redux"
import ProfileList from "./profile-list-item";
import "./profileStyle.css"

const ProfileMain = () => {
    //const profile = useSelector(state => state.profile);

    return (
      <div>
        <ProfileList/>
      </div>
        /* {
          profile.map((pro) => {
            return <ProfileList pro={pro} key={pro.id} />;
          })} */

    );
}

export default ProfileMain;

{/* <div>
  <img
    src="https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg"
    height="200px"
    width="100%"
    alt="Banner image"
  />
  <div className="mt-2">
    <img
      src="https://static-cse.canva.com/blob/666309/bestfreestockphotos.jpg"
      height="130px"
      width="130px"
      className="rounded-circle wd-icon"
    />

    <button className="rounded-pill btn float-end wd-btn-background">
      Edit profile
    </button>
  </div>
  <div className="mt-5 wd-text-div">
    <h2>
      <header>WebDev</header>
    </h2>
    <p>@WebDev</p>
    <p>
      My teachers told me I never amount to much because I procrastinate so
      much. I told them, “Just you wait!"
    </p>
    <i className="fas fa-map-marker-alt "> Boston,MA </i>
    <i className="fas fa-building ms-3"> Born Novemeber 21,1968</i>
    <i className="fas fa-calendar-alt ms-3"> Joined April 2009</i>
    <div className="mt-3">
      <p>
        <b>321</b> Following <b>553</b> Followers
      </p>
    </div>
  </div>
</div>; */}