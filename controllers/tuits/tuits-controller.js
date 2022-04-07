import * as tuitsDao from "../../mongoose/tuits-dao.js";
// import posts from "./tuits.js";
// let tuits = posts;

// const createTuit = (req, res) => {
//     const newTuit = req.body;
//     newTuit._id = new Date().getTime()+'';  // create id 
//     newTuit.likes = 0;
//     newTuit.dislikes = 5;
//     tuits.push(newTuit);
//     res.json(newTuit);
// };




// const findAllTuits = (req, res) => {
//   res.json(tuits);
// };
// const updateTuit = (req, res) => {
//   const tuitIdToUpdate = req.params["tid"];
//   const updatedTuit = req.body;
//   tuits = tuits.map((t) => (t._id === tuitIdToUpdate ? updatedTuit : t));
//   res.sendStatus(200);
// };

// const deleteTuit = (req, res) => {
//     const tuitIdToDelete = req.params.tid;
//     tuits = tuits.filter(t => t._id !== tuitIdToDelete);
//     res.sendStatus(200);
// };

const createTuitByUser = (req, res) => {
  const userId = req.params["uid"];
  let newTuit = req.body;
  newTuit._id = new Date().getTime() + "";
  newTuit.postedBy = userId;
  tuits.push(newTuit);
  res.json(newTuit);
};

const findTuitsByUser = (req, res) => {
  const userId = req.params["uid"];
  const tuitsByUser = tuits.filter((tuit) => tuit.postedBy === userId);
  res.json(tuitsByUser);
};

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
};

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 5;
  newTuit.dislikes = 3;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.send(status);
}


const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);     //id that needs to update= tuitdIdToUpdate // body to update 
  res.send(status);
}


export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findAllTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
  app.post("/api/users/:uid/tuits", createTuitByUser);    // create tuits by this user   with this user
  app.get("/api/users/:uid/tuits", findTuitsByUser);     // get tuits by this user      using their user user
};
