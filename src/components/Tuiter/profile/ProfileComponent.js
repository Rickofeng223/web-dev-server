import React from "react";

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

