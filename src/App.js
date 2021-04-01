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


  /*
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  */

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
            
            </Route>

            <Route path="/blog">
              <Blog data={blogData} passedFunction={this.test} />
            </Route>

            <Route
            path='/post/:id'
            render={(props) => (
              <Post {...props} data={this.state.blogPosts} singleBlogPost={true} />
              )}  
              />


            {/*

            
            <Post data={this.state.blogPosts} singleBlogPost={true}  />

            
            <Route
            path='/post/:id'
            render={(props) => (
              <Post {...props} data={this.state.blogPosts} showSearch={true} />
              )}  
              />


                        <Post data={this.state.blogPosts} />



                      <Route
            path='/post/:id'
            render={(props) => (
              <Post {...props} data={this.state.blogPosts} onClick={(e) => this.test(props.id)} />
              )}  
              />

                   <Route path="/post/:id" onClick={(e) => this.test(params.id)}>

              <Post data={this.state.blogPosts} />

            </Route>


              <Route path="/post/:id" component={Post} />
            */}

    
            <Route component={TheNotFoundPage} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
