import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileList = () => {
  const userProfile = useSelector((state) => state.profile);
  //const [userFirstName, setUserFirstName] = useState(userProfile.firstName);
  const [isEditMode, setIsEditMode] = useState(false);
  //const [userLastName, setUserLastName] = useState(userProfile.lastName);
  const [fullName, setFullName] = useState(userProfile.firstName +" "+ userProfile.lastName);
  const [bio,setBio] = useState(userProfile.bio);
  const [location, setLocation] = useState(userProfile.location);
   const [dateOfBirth, setDateOfBirth] = useState(userProfile.dateOfBirth);
  const dispatch = useDispatch();
  
  const editProfile= () =>{
    setIsEditMode(true);
  }
  const cancelEdit=() =>{
    setIsEditMode(false);
  }

  const handleFirstNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleBioChange = (b) => {
     setBio(b.target.value);
  };
  const handleLocationChange = (l) => {
    setLocation(l.target.value);
  };
  const handleDateOfBirthChange = (dob) => {
    setDateOfBirth(dob.target.value);
  };
  const saveEdits = ()=>{
    const nameArray = fullName.split(" "); 
    let fName = nameArray.length>0? nameArray[0]:""    // since nameArray is created by splitting the name typed by the user, if user only type an one name.
    let lName = nameArray.length>1?nameArray[1]:""      // we don't have a value for the 1st location of the array, if so we will get an error if we going to access the nameArray[1] 
    editProfileClickHandler(fName,lName,bio,location,dateOfBirth);
    setIsEditMode(false);
  }

  
  const editProfileClickHandler = (firstName,lastName,bio,location,dateOfBirth) => {
    const action = {
      type: "edit-profile",
      firstName: firstName,
      lastName: lastName,
      bio:bio,
      location: location,
      dateOfBirth: dateOfBirth,
    };
    dispatch(action);
  };
  return (
    <div>
      {isEditMode ? (
        <span onClick={cancelEdit}>
          <i class="fas fa-times"></i>
        </span>
      ) : (
        ""
      )}
      {isEditMode ? (
        <button onClick={saveEdits} className="rounded-pill float-end">
          Save
        </button>
      ) : (
        ""
      )}
      <img
        src={userProfile.bannerPicture}
        height="200px"
        width="100%"
        alt="Banner"
      />
      <div className="mt-2">
        <img
          src={userProfile.profilePicture}
          height="140px"
          width="140px"
          className="rounded-circle wd-icon"
          alt="profilePic"
        />
        {!isEditMode ? (
          <button
            className="rounded-pill btn float-end wd-btn-background"
            onClick={editProfile}
          >
            Edit profile
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="mt-5 wd-text-div">
        <h2>
          <header>
            {isEditMode ? (
              <div>
                <h5>Full Name: </h5>
                <input
                  onChange={handleFirstNameChange}
                  value={fullName}
                ></input>
              </div>
            ) : (
              <span>
                {userProfile.firstName} {userProfile.lastName}
              </span>
            )}
          </header>
        </h2>
        {!isEditMode ? <p>{userProfile.handle}</p> : ""}

        {isEditMode ? (
          <div>
            <h5>Bio: </h5>
            <input onChange={handleBioChange} value={bio}></input>
          </div>
        ) : (
          ""
        )}
        <p>{userProfile.bio}</p>
        {isEditMode ? (
          <div>
            <h5>Location: </h5>
            <input onChange={handleLocationChange} value={location}></input>
          </div>
        ) : (
          ""
        )}
        <i className="fas fa-map-marker-alt "> {userProfile.location} </i>
        {isEditMode ? (
          <div>
            <h5>DateOfBirth: </h5>
        <input onChange={handleDateOfBirthChange} value={dateOfBirth}></input>
        </div>): ""
        }
        <i className="fas fa-building ms-3"> Born {userProfile.dateOfBirth}</i>

        {!isEditMode ? (
          <i className="fas fa-calendar-alt ms-3"> Joined {userProfile.dateJoined}</i>
        ) : (
          ""
        )}
        <div className="mt-3">
          {!isEditMode ? (
            <p>
              {userProfile.followingCount} Following {userProfile.followersCount} Followers
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default ProfileList;
