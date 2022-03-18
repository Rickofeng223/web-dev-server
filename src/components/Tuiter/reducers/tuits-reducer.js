import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
    case "delete-tuit":
      return state.filter((post) => post._id !== action.post._id);

    case "like-tuit":
      return state.map((post) => {
        if (post._id === action.post._id) {
          if (post.liked === true) {
            post.liked = false;
            post.heart--;
          } else {
            post.liked = true;
            post.heart++;
          }
          return post;
        } else {
          return post;
        }
      });

    case "create-tuit":
      const newTuit = {
        title: action.tuit,   // calling the action.tuit from whats-happening
        avatarIcon:
          "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",

        _id: new Date().getTime() + "",
        cardImage:
          "https://stillmed.olympics.com/media/Images/News/2021/09/2021-09-08-Beijing-featured.jpg",
        userName: "Elon Musk",
        From: "netflix.com",
        comment: 32,
        retweet: 35,
        heart: 46,
        liked: false,
      };
      return [newTuit, ...state];
    default:
      return tuits;
  }
};

export default tuitsReducer;
