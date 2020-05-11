import React from "react";
import { HashRouter, Route } from "react-router-dom";
//import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route path="/home">
        <h1> home </h1>
      </Route>
      <Route path="/home/test">
        <h1> test </h1>
      </Route>
      <Route path="/home/test/test2">
        <h1> test2 </h1>
      </Route>
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
