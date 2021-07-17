import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import HttpClient from './network/http';
import PostService from './service/post.js';
import AuthService from './service/auth';

//basic api url
const baseURL = 'https://jia-blog.herokuapp.com';
// const baseURL = `http://localhost:8080`;

//class that has http common option and error handling
const httpClient = new HttpClient(baseURL);

//class that controll all post/auth related APIs
const postService = new PostService(httpClient);
const authService = new AuthService(httpClient);

//basic url
const routeBase = '/blog-client';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={routeBase}>
      <AuthProvider authService={authService}>
        <App postService={postService} />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);