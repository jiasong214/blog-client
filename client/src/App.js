import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Post from './pages/Post';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import PostService from './service/post.js';
import AuthService from './service/auth';
import TokenStorage from './db/token';

//class that manage token in localStorage
const tokenStorage = new TokenStorage();

//class that controll all post/auth related APIs
const postService = new PostService(tokenStorage);
const authService = new AuthService(tokenStorage);

function App() {
  const [category, setCategory] = useState();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();


  //update post list depend on selected category
  useEffect(() => {
    postService
      .getPostsByCategory(category)
      .then((data) => setPosts(data))
      .catch(console.error())
  }, [category]);

  //change category state
  const changeCategory = (category) => setCategory(category);

  //change posts state when post is deleted
  const changePostsByDelete = (id) => {
    setPosts(() => posts.filter(post => parseInt(post.id) !== parseInt(id)));
  };

  const changeUserState = (user) => setUser(user);


  return (
    <div className="App">
      <BrowserRouter>
        <Header 
          changeCategory={changeCategory} 
          tokenStorage={tokenStorage} />
        <Switch>
            <Route exact path="/">
              <Main 
                postService={postService} 
                posts={posts} 
                changeCategory={changeCategory}
                user={user} />
            </Route>
            <Route exact path="/post?id=:id">
              <Post 
                postService={postService} 
                changePostsByDelete={changePostsByDelete}
                user={user} />
            </Route>
            <Route path="/post/compost">
              <CreatePost postService={postService} />
            </Route>
            {/* 이거 어떻게 묶는지? */}
            <Route path="/post/compost?id=:id">
              <CreatePost postService={postService} />
            </Route>
            <Route path="/login">
              <Login 
                authService={authService} 
                changeUserState={changeUserState} />
            </Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
