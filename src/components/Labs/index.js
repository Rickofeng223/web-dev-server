import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";



const Labs = () => {
  return (
    <div>
        <h1>Labs!!!</h1>
        <Link to="/hello">Hello</Link> |<Link to="/tuiter">Tuiter</Link>
        <TodoItem />
        <TodoList />
        <ConditionalOutput />
        <Styles />
        <Classes />
      
    </div>
  );
};

export default Labs;
