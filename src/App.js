import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/index.js";
import Team from "./pages/team/index.js";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/team" component={Team}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
