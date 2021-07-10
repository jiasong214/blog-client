import React, { useState, useEffect, useCallback, useMemo, createRef, createContext, useImperativeHandle, } from 'react';
import { useContext } from 'react';

export const AuthContext = createContext({});
const tokenRef = createRef();


export const AuthProvider = ({authService, children}) => {
  const [user, setUser] = useState(undefined);

  useImperativeHandle(tokenRef, () => (user ? user.token : undefined));

  useEffect(() => {
    authService
      .me()
      .then((data) => setUser(data))
      .catch(console.error);
  }, [authService]);

  const onLogin = useCallback(async (username, password) => {
    authService
      .login(username, password)
      .then((data) => setUser(data));
  }, [authService])

  const onLogout = useCallback(async () => {
    authService
      .logout()
      .then(() => setUser(undefined));
  }, [authService])

  const context = useMemo(() => ({
    user, onLogin, onLogout
  }), [user, onLogin, onLogout])

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export const fetchToken = () => tokenRef.current;
export const useAuth = () => useContext(AuthContext);