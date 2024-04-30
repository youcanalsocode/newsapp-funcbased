import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<News country="IN" catg="General" />} />
        </Routes>
        <Routes>
          <Route
            path="/business"
            element={<News country="IN" catg="business" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/entertainment"
            element={<News country="IN" catg="entertainment" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/general"
            element={<News country="IN" catg="General" />}
          />
        </Routes>
        <Routes>
          <Route path="/health" element={<News country="IN" catg="health" />} />
        </Routes>
        <Routes>
          <Route
            path="/science"
            element={<News country="IN" catg="science" />}
          />
        </Routes>
        <Routes>
          <Route path="/sports" element={<News country="IN" catg="sports" />} />
        </Routes>
        <Routes>
          <Route
            path="/technology"
            element={<News country="IN" catg="technology" />}
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
