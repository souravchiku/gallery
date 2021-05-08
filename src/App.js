import react from "react";
import Gallery from "./components/Gallery";
import Jokes from "./components/Jokes";
import Home from "./components/Home";
import Content from "./components/Content";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Route path="/gallery">
          {" "}
          <Gallery />{" "}
        </Route>
        <Route exact path="/">
          {" "}
          <Content />
        </Route>
        <Route path="/jokes">
          {" "}
          <Jokes />
        </Route>
      </BrowserRouter>
      {/* <Gallery /> */}
      {/* <Jokes /> */}
    </div>
  );
};

export default App;
