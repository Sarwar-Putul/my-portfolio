import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componants/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllProjects from './Componants/AllProjects/AllProjects';


const App = () => {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/allProjects">
            <AllProjects />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;