import React from "react";
import './assets/css/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import blogData from './components/blog/data.js';
import Header from './components/header/header';
import Home from './components/home/index';
import Blog from './components/blog/index';


function App() {
  return (
    <Router>
     <div className="App">
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
          
          </Route>
          <Route path="/blog">
            <Blog data={blogData} />
          </Route>
          <Route path="/">

          <Home />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
