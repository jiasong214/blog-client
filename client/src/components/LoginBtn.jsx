import React, { useState } from 'react';
import { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import '../style/loginBtn.scss';

const clientId = "615317878476-8qppdmmuemebo8i0es5uvce8vfgh909a.apps.googleusercontent.com";

const LoginBtn = ({ tokenStorage }) => {
  const [token, setToken] = useState();

  //if there is a token in localStorage, take it
  useEffect(() => {
    setToken(tokenStorage.getToken());
  }, [tokenStorage]);


  const onSuccess = (response) => {
    tokenStorage.saveToken(response.accessToken);
    setToken(tokenStorage.getToken());
  };

  const onFailure = (error) => console.log(error);

  const onLogout = () => {
    tokenStorage.clearToken();
    setToken();
  }


  return(
    <div className='loginBtn'>
      {token ? 
        <div 
          className='loginBtn__logoutBtn' 
          onClick={() => onLogout()}>
          LOG OUT
        </div> :
        <GoogleLogin
          clientId={clientId}
          responseType={"id_token"}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      }
    </div>
  )
}

export default LoginBtn;