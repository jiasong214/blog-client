import { AnimatePresence } from 'framer-motion';
import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import usePost from './hooks/usePost';

const Main = lazy(() => import('./pages/Main'));
const Post = lazy(() => import('./pages/Post'));
const Login = lazy(() => import('./pages/Login'));
const CreatePost = lazy(() => import('./pages/CreatePost'));

function App({postService}) {
  const { 
    posts,
    total,
    createPost, 
    updatePost, 
    deletePost,
    updateCurrentPostIndex,
   } = usePost({postService});
  const location = useLocation();

  return (
    <div className="App">
      <Suspense fallback={<div/>}>
        <AnimatePresence exitBeforeEnter>
          <Switch key={location.pathname} location={location}>
            {/* main: all posts */}
            <Route 
              exact path="/"
              render={() =>
                <Main 
                  postService={postService}  
                  posts={posts}
                  total={total}
                  updateCurrentPostIndex={updateCurrentPostIndex}
                />
              }
            />
            {/* create post page */}
            <Route 
              exact path="/post/compose"
              render={() =>
                <CreatePost 
                  postService={postService} 
                  createPost={createPost}
                  updatePost={updatePost}
                />
              }/>
            {/* post(id) page */}
            <Route 
              exact path="/post/:id"
              render={() =>
                <Post 
                  postService={postService} 
                  deletePost={deletePost}
                />
              }
            />
            {/* edit post(id)  */}
            <Route 
              exact path="/post/:id/edit"
              render={() =>
                <CreatePost 
                  postService={postService} 
                />
              }
            />
            {/* login page  */}
            <Route exact path="/login" component={Login} />
          </Switch>
        </AnimatePresence>
      </Suspense>
      
      <div>
        <div id="background" />
        <div id="background-effect1" />
        <div id="background-effect2" />
      </div>
    </div>
  );
}

export default App;
