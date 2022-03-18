import React from "react";
import { useSelector } from "react-redux";    // import useSelector hook from react-redux


const HelloReduxExampleComponent = () => {
  // because in index.js  const reducers = combineReducers({ hello, todos }); so we need to use state to display both hello, todos
  const message = useSelector((state) => state.hello.message); // extract 'Hello World' from reducer
  const message2 = useSelector((state) => state.hello.message2);
  return (
    <>
      <h1>{message}</h1>
      <h1>{message2}</h1> 
    </>
  ); // render <h1>Hello World</h1>
};

export default HelloReduxExampleComponent;
