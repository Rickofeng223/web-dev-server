import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
  return (
    <ul>
      {todos.map((todo1,key) => {
        return <TodoItem todo={todo1} key={key} />;
      })}
    </ul>
  );
};
export default TodoList;
