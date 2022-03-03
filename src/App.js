import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom"; // import Route

import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";

import HelloWorld from "./components/HelloWorld"; // no .js extension needed    imports HelloWorld.js
import Labs from "./components/Labs"; // imports Labs.js
import Tuiter from "./components/Tuiter"; // imports Tuiter.js

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" exact={true} element={<Labs />} />
          <Route path="/labss" exact={true} element={<Labs />} />

          <Route path="/hello" exact={true} element={<HelloWorld />} />

          <Route path="/tuiter" exact={true} element={<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       We can edit it here!!!!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
