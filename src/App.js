import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // (1)

import AddOne from "./pages/AddOne";
import News from "./pages/News";
import Weather from "./pages/Weather";
import Sports from "./pages/Sports";

const App = () => (
  <Router>
    <main>
      <nav>
        <Link to="/">AddOne</Link>
        <Link to="/news">News</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/sports">Sports</Link>
      </nav>
      <Route exact path="/" component={AddOne} />
      <Route path="/news" component={News} />
      <Route path="/weather" component={Weather} />
      <Route path="/sports" component={Sports} />
    </main>
  </Router>
);

export default App;
