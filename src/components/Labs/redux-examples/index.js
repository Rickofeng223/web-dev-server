import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component"; // import the component that consumes the data
import hello from "./reducers/hello";    // import reducer that calculates/generates the data
import todos from "./reducers/todos-reducer";   // import the new reducer

import { Provider } from "react-redux";   // import Provider which will deliver the data
import { combineReducers, createStore } from "redux";  // import the combineReducers function

import Todos from "./todos-component";   // import new component to render todos

const reducers = combineReducers({ hello, todos }); // combine all reducers into a single reducer, each available through these namespaces
const store = createStore(reducers);  // create single store from combined reducers

const ReduxExamples = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>Redux Examples</h2>
        <Todos/>
        <HelloReduxExampleComponent/>      
      </div>
    </Provider>
  );
};
export default ReduxExamples;
