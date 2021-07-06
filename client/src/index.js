import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import HttpClient from './network/http';
import PostService from './service/post.js';
import AuthService from './service/auth';
import TokenStorage from './db/token';

//class that manage token in localStorage
const tokenStorage = new TokenStorage();

//basic url from env file
const baseURL = process.env.REACT_APP_BASE_URL;

//class that has http common option and error handling
const httpClient = new HttpClient(baseURL);

//class that controll all post/auth related APIs
const postService = new PostService(httpClient, tokenStorage);
const authService = new AuthService(httpClient, tokenStorage);

console.log("index");


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider authService={authService}>
      <App postService={postService} />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);