import React from "react";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";



const Labs = () => {
  return (
    <div>
      <h1>Labs!!!</h1>
      <TodoItem />
      <TodoList/>
      <ConditionalOutput />
      <Styles />
      <Classes />
    </div>
  );
};

export default Labs;
