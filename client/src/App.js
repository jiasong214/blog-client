import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Post from './pages/Post';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';

function App({postService}) {
  const [posts, setPosts] = useState([]);

  console.log("App");

  //update post list depend on selected category
  useEffect(() => {
    postService
      .getPosts()
      .then((data) => setPosts(data))
      .catch(console.error())
  }, [postService]);

  //change posts state when post is deleted
  const changePostsByDelete = (id) => {
    setPosts(() => posts.filter((post) => parseInt(post.id) !== parseInt(id)));
  };

  const changePostsByCreate = (post) => {
    setPosts(() => [post, ...posts]);
  };

  const changePostsByUpdate = (id, updated) => {
    const updatedPost = posts.map((post) => (
      parseInt(post.id) === parseInt(id) ? updated : post
    ));
    
    setPosts(updatedPost);
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {/* main: all posts */}
          <Route exact path="/">
            <Main 
              postService={postService}  
              posts={posts} />
          </Route>

          {/* create post page */}
          <Route exact path="/post/compose">
            <CreatePost 
              postService={postService} 
              changePostsByCreate={changePostsByCreate}
              changePostsByUpdate={changePostsByUpdate} />
          </Route>

          {/* post(id) page */}
          <Route exact path="/post/:id">
            <Post 
              postService={postService} 
              changePostsByDelete={changePostsByDelete} />
          </Route>

          {/* edit post(id)  */}
          <Route exact path="/post/:id/edit">
            <CreatePost postService={postService} />
          </Route>

          {/* login page  */}
          <Route exact path="/login" component={Login} />

        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
