//import express from "./node_modules/express";
//const express = require("express"); // same as import express frp, but the old way of doing it
import express from "express";  // ES6 import instead of require
import helloController from "./controllers/users/hello-controller.js"
import tuitsController from "./controllers/tuits/tuits-controller.js";
import userController from "./controllers/users/user-controller.js";
import cors from 'cors';
import mongoose from "mongoose";

const mongoAtLasPass = process.env.MONGO_AT_LAS_PASS;
mongoose.connect(
 `mongodb://localhost:27017/webdev` ||     
  `mongodb+srv://admin:${mongoAtLasPass}@cluster0.urank.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` 
);

const app = express();
app.use(cors());
helloController(app);
app.use(express.json());  // parse JSON from HTTP request body  post
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000); // Configuring Node applications to run remotely on Heroku

app.get("/", (request, response) => {
  response.send("Welcome to Full Stack Development!!!!");
});
