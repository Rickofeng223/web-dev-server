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
      <Link to="/lab">
      <h1>Labs!!!</h1>
      <TodoItem />
      <TodoList/>
      <ConditionalOutput />
      <Styles />
      <Classes />
      </Link>
    </div>
  );
};

export default Labs;
