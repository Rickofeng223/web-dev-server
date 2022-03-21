import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileList = ({  }) => {
  //let [edit, setEdit] = useState("");
  const userProfile = useSelector((state) => state.profile);
 // const userProfile = profile[0];
  const pro = userProfile
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
        src={pro.bannerPicture}
        height="200px"
        width="100%"
        alt="Banner image"
      />
      <div className="mt-2">
        <img
          src={pro.profilePicture}
          height="140px"
          width="140px"
          className="rounded-circle wd-icon"
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
                {pro.firstName} {pro.lastName}
              </span>
            )}
          </header>
        </h2>
        {!isEditMode ? <p>{pro.handle}</p> : ""}

        {isEditMode ? (
          <div>
            <h5>Bio: </h5>
            <input onChange={handleBioChange} value={bio}></input>
          </div>
        ) : (
          ""
        )}
        <p>{pro.bio}</p>
        {isEditMode ? (
          <div>
            <h5>Location: </h5>
            <input onChange={handleLocationChange} value={location}></input>
          </div>
        ) : (
          ""
        )}
        <i className="fas fa-map-marker-alt "> {pro.location} </i>
        {isEditMode ? (
          <div>
            <h5>DateOfBirth: </h5>
        <input onChange={handleDateOfBirthChange} value={dateOfBirth}></input>
        </div>): ""
        }
        <i className="fas fa-building ms-3"> Born {pro.dateOfBirth}</i>

        {!isEditMode ? (
          <i className="fas fa-calendar-alt ms-3"> Joined {pro.dateJoined}</i>
        ) : (
          ""
        )}
        <div className="mt-3">
          {!isEditMode ? (
            <p>
              {pro.followingCount} Following {pro.followersCount} Followers
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

{
  /* <div>
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
</div>; */
}
