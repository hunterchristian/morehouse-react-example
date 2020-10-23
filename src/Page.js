import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // (1)

const Home = (props) => (
  <section className="home">
    <h1>Home</h1>
  </section>
); // (2)
const News = (props) => (
  <section className="news">
    <h1>News</h1>
  </section>
); // (2)
const Weather = (props) => (
  <section className="weather">
    <h1>Weather</h1>
  </section>
); // (2)
const Sports = (props) => (
  <section className="sports">
    <h1>Sports</h1>
  </section>
); // (2)

const App = () => (
  <Router>
    <main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/sports">Sports</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/news" component={News} />
      <Route path="/weather" component={Weather} />
      <Route path="/sports" component={Sports} />
    </main>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
