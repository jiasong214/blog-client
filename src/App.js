import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
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

  // console.log('App is re-rendered');

  return (
    <div className="App">
      <Suspense fallback={<div/>}>
        <Switch>

          {/* main: all posts */}
          <Route exact path="/">
            <Main 
              postService={postService}  
              posts={posts}
              total={total}
              updateCurrentPostIndex={updateCurrentPostIndex}
            />
          </Route>

          {/* create post page */}
          <Route exact path="/post/compose">
            <CreatePost 
              postService={postService} 
              createPost={createPost}
              updatePost={updatePost}
            />
          </Route>

          {/* post(id) page */}
          <Route exact path="/post/:id">
            <Post 
              postService={postService} 
              deletePost={deletePost}
            />
          </Route>

          {/* edit post(id)  */}
          <Route exact path="/post/:id/edit">
            <CreatePost postService={postService} />
          </Route>

          {/* login page  */}
          <Route exact path="/login" component={Login} />

        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
