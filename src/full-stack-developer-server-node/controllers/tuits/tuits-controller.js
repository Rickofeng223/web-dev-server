import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = new Date().getTime()+'';  // create id 
    newTuit.likes = 0;
    newTuit.dislikes = 5;
    tuits.push(newTuit);
    res.json(newTuit);
};

const createTuitByUser = (req, res) => {
  const userId = req.params["uid"];
  let newTuit = req.body;
  newTuit._id = new Date().getTime() + "";
  newTuit.postedBy = userId;
  tuits.push(newTuit);
  res.json(newTuit);
};


const findAllTuits = (req, res) => {
  res.json(tuits);
};
const updateTuit = (req, res) => {
  const tuitIdToUpdate = req.params["tid"];
  const updatedTuit = req.body;
  tuits = tuits.map((t) => (t._id === tuitIdToUpdate ? updatedTuit : t));
  res.sendStatus(200);
};

const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);
};

const findTuitsByUser = (req, res) => {
  const userId = req.params["uid"];
  const tuitsByUser = tuits.filter((tuit) => tuit.postedBy === userId);
  res.json(tuitsByUser);
};


export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findAllTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
  app.post("/api/users/:uid/tuits", createTuitByUser);
  app.get("/api/users/:uid/tuits", findTuitsByUser);
};
