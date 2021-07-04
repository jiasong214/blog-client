import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import PostService from './service/post.js';

//class that controll all post related APIs
const postService = new PostService();

function App() {
  const [category, setCategory] = useState();

  const changeCategory = (category) => setCategory(category);

  return (
    <div className="App">
      <BrowserRouter>
        <Header changeCategory={changeCategory} />
        <Switch>
            <Route exact path="/">
              <Main postService={postService} category={category} changeCategory={changeCategory} />
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
