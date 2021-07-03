import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';

import PostService from './service/post.js';

const postService = new PostService();


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/">
              <Main postService={postService} />
            </Route>
            <Route exact path="/post?id=:id">
              <Post postService={postService} />
            </Route>
            <Route path="/post/compost">
              <CreatePost postService={postService} />
            </Route>
            {/* 이거 어떻게 묶는지? */}
            <Route path="/post/compost?id=:id">
              <CreatePost postService={postService} />
            </Route>
          </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
