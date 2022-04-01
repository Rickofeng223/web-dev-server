import usersImport from "./users.js";
let users = usersImport; // because delete can not be constant so need reassign users

const userController = (app) => {
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:uid", findUserById);   // read 
  app.post("/api/users", createUser);         // create 
  app.delete("/api/users/:uid", deleteUser);   // delete 
  app.put("/api/users/:uid", updateUser);     // update
};

const createUser = (req, res) => {
  const newUser = req.body; //  raw information from postman
  newUser._id = new Date().getTime() + ""; // create _id
  users.push(newUser);
  res.json(newUser);
};

const updateUser = (req,res) => {
  const userId = req.params["uid"]; // get the id 123 example: http://localhost:4000/api/users/123
  const updatedUser = req.body; // get the raw information from postman
  // check if _id is match userId if yes get raw information if not stay same with usr
  users = users.map((usr1) => (usr1._id === userId ? updatedUser : usr1));
  res.sendStatus(200);
}

const deleteUser = (req, res) => {
  const userId = req.params.uid; // get user ID   // 123
  console.log(userId);
  users = users.filter((usr) => usr._id !== userId);    // keep users thats !== userId
  console.log(users);
  // method 2 if not rename import users to let users = usersImport
  // const usersIndex = users.findIndex((u) => u._id === userId);   // find index of user
  // users.splice(usersIndex, 1); // delete user
  res.sendStatus(200);
};;



const findUsersByType = (type) => {
  return users
    .filter((user1) => type === user1.type)
    .map((user2) => user2.username);
};

const findUserById = (req, res) => {
  const userId = req.params.uid; // get the users _id   123,345
  const user = users.find((u) => u._id === userId);
  res.json(user);
};

const findAllUsers = (req, res) => {
  const type = req.query.type; // retrieve type parameter from query      get the users type
  if (type) {
    res.json(findUsersByType(type)); // find all users of that type and respond
    return; // return so it doesn't continue
  }
  res.json(users);
};

export default userController;
