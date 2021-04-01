import React from "react";
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
    width: 0,
    height: 0
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
              <Blog data={blogData} />
            </Route>


            <Route path="/post/:id" component={Post} />

            
              {/*


              

                   <Route exact path="/post/:id" render={({match}) => (
                <Post post={blogData.find(p => p.id === match.params.id)} />
                 )} />

                <Route path="/post/:id" render={(blogData) => <Post {...blogData} />} />



                <Route exact path="/post/:id" render={({match}) => (
                <Post post={blogData.find(p => p.id === match.params.id)} />
              )} />


                 <Post data={blogData} />
                 <Post post={posts.find(p => p.id === match.params.id)} />
              */}

       
        
            <Route component={TheNotFoundPage} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
