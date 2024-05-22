import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<News country="IN" catg="General" />} />
          <Route
            path="/business"
            element={<News country="IN" catg="business" />}
          />
          <Route
            path="/entertainment"
            element={<News country="IN" catg="entertainment" />}
          />
          <Route
            path="/general"
            element={<News country="IN" catg="General" />}
          />
          <Route path="/health" element={<News country="IN" catg="health" />} />
          <Route
            path="/science"
            element={<News country="IN" catg="science" />}
          />
          <Route path="/sports" element={<News country="IN" catg="sports" />} />
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
