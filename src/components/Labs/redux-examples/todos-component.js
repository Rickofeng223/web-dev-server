
import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector((state) => state.todos); // retrieve todos from reducer state and assign to, local todos constant
  const [todo, setTodo] = useState({ do: "",done: false }); // create todo local state variable   // handle create click event
  const dispatch = useDispatch(); // create action object

  const createTodoClickHandler = () => {
    // required action type
    const action = {
      type: "create-todo",
      todo // payload
    };
    dispatch(action); // send action to reducers
  };

  const deleteTodoClickHandler = (todo) =>{
    // delete todo event handler accepts todo
    const action = {
      // create new action
      type: "delete-todo", // with type 'delete-todo'
      todo // include todo to remove
    };
    dispatch(action); // send action to all reducers
  }

  const updateTodoClickHandler = (todo) =>{
    const action = {
      type: 'update-todo',
      todo
    };
    dispatch(action);
  }

  const todoChangeHandler = (event) => {
    // handle keystroke changes in input field
    const doValue = event.target.value; // get data from input field
    const newTodo = {
      // create new todo object instance
      do: doValue, // setting the todo's do property
    };
    setTodo(newTodo); // change local state todo variable
  };

  return (
    <>
      <h3>Todos</h3>

      <ul>
        {todos.map(
          (
            todo // iterate over todos array and render a
          ) => (
            <li className="list-group-item">
              <input
                checked={todo.done}
                onChange={(event) =>
                  updateTodoClickHandler({
                    ...todo,
                    done: event.target.checked,
                  })
                }
                type="checkbox"
              />
              {todo.do}
              <button
                onClick={() => deleteTodoClickHandler(todo)}
                className="btn btn-danger float-end  "
              >
                Delete
              </button>
            </li> // line item element for each todo object display do property containing the todo text
          )
        )}
      </ul>

      <ul className="list-group">
        <li className="list-group-item">
          <input // containing an input field to type todo
            onChange={todoChangeHandler} // handle keystrokes to update component state
            value={todo.do} // update field with latest state value
            className="form-control"
          />
          <button onClick={createTodoClickHandler} className="btn btn-primary">
            Create New Todo
          </button>
        </li>
      </ul>
    </>
  );
};
export default Todos;