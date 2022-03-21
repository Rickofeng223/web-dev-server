
const profileData = {
  firstName: "Mark",
  lastName: "Wahlberg",
  handle: "@MarkWal",
  profilePicture:
    "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/wahlberg-mc-square-220110-02-b3faac.jpg",
  bannerPicture:
    "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/02/640/320/GettyImages-610523288.jpg?ve=1&tl=1",
  bio: "Mark Wahlberg reveals his thoughts on cancel culture: 'We all have our moments'",
  website: "youtube.com/webdevtv",
  location: "Boston, MA",
  dateOfBirth: "7/7/1968",
  dateJoined: "4/2009",
  followingCount: 312,
  followersCount: 180,
};

const profileReducer = (state = profileData, action) => {
  switch (action.type) {
    case "edit-profile":
      console.log("inside the reducer ", action);
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        bio: action.bio,
        location: action.location,
        dateOfBirth: action.dateOfBirth,
      };

    default:
      return profileData;
  }
};

export default profileReducer;
