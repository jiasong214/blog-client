import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Post from './pages/Post';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';

function App({postService}) {
  const [category, setCategory] = useState();
  const [posts, setPosts] = useState([]);

  console.log("App")

  //update post list depend on selected category
  useEffect(() => {
    postService
      .getPostsByCategory(category)
      .then((data) => setPosts(data))
      .catch(console.error())
  }, [postService, category]);

  //change category state
  const changeCategory = (category) => setCategory(category);

  //change posts state when post is deleted
  const changePostsByDelete = (id) => {
    setPosts(() => posts.filter((post) => parseInt(post.id) !== parseInt(id)));
  };

  const changePostsByCreate = (post) => {
    setPosts(() => [post, ...posts]);
  };

  const changePostsByUpdate = (id, updated) => {
    setPosts(() => posts.map((post) => parseInt(post.id) === parseInt(id) ? updated : post));
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Header changeCategory={changeCategory} />
        <Switch>
          <Route exact path="/">
            <Main 
              postService={postService}  
              changeCategory={changeCategory}
              posts={posts} />
          </Route>
          <Route exact path="/post?id=:id">
            <Post 
              postService={postService} 
              changePostsByDelete={changePostsByDelete} />
          </Route>
          <Route path="/post/compost">
            <CreatePost 
              postService={postService} 
              changePostsByCreate={changePostsByCreate}
              changePostsByUpdate={changePostsByUpdate} />
          </Route>
          {/* 이거 어떻게 묶는지? */}
          <Route path="/post/compost?id=:id">
            <CreatePost postService={postService} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
