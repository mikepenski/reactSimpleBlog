import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import blogData from './components/blog/data.js';
import Header from './components/header/header';
import Home from './components/home/index';
import Blog from './components/blog/index';
import Post from './components/blog/post';
import Contact from './components/global/Contact';
import TheNotFoundPage from './components/global/404';


class App extends React.Component {
  
  state = {
    headerPaddingTop: '',
    blogPosts: blogData
  }
  
  componentDidMount(){

    let header = document.querySelector("header");
    let header_height = header.offsetHeight;
    document.body.style.paddingTop = header_height + "px";

    window.addEventListener('resize', this.resizeWindow);
  
  }

  resizeWindow = () => {

  let header = document.querySelector("header");
  let header_height = header.offsetHeight;
  document.body.style.paddingTop = header_height + "px";

}

getPostById(id) {
  return this.state.blogPosts[id]
}

  render(){

    return (
      <Router>
      <div className="App">
          <Header />

          <Switch>

          <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>

            <Route path="/blog">
              <Blog data={blogData} passedFunction={this.test} />
            </Route>

          {/*   <Route path='/post/:id'>
              <Post data={blogData}  />
            </Route> */}

            <Route path="/post/:id">
              <Post getPost={e => this.getPostById(e)}></Post>
           </Route>

            <Route component={TheNotFoundPage} />

            {/*
             <Route
            path='/post/:id'
            render={(props) => (
              <Post {...props} data={this.state.blogPosts} />
              )}  
              />
            */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;











 /*
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  */
