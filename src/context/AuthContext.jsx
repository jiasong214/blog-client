import React, { useState, useEffect, useCallback, useMemo, createContext, useContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({authService, children}) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    authService
      .me()
      .then((data) => setUser(data));
  }, [authService]);

  const onLogin = useCallback(async (username, password) => {
    authService
      .login(username, password)
      .then((data) => setUser(data))
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

export const useAuth = () => useContext(AuthContext);