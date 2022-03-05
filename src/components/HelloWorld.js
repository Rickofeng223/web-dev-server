import React from "react";
import { Link } from "react-router-dom";

const HelloWorld = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/">Labs</Link> |<Link to="/tuiter"> Tuiter</Link>|
      <Link to="/tuiter/explore">Explore</Link> |
      <Link to="/tuiter/home">Home</Link>
    </>
  );
};

export default HelloWorld;
