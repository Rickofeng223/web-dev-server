import mongoose from "mongoose";
const schema = mongoose.Schema(// create schema
  {
    tuit: String, // tuit property of type String
    likes: Number, // likes property of type Number
    dislikes: Number,
    postedBy: {
      username: String,
    },
  },
  { collection: "tuits" } // which collection name
);
export default schema;      // export schema so it can be used elsewhere
 