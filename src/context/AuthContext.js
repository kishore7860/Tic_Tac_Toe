import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    username: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      setAuth({
        isAuthenticated: true,
        token,
        username,
      });
    }
  }, []);

  const login = (token, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setAuth({
      isAuthenticated: true,
      token,
      username,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setAuth({
      isAuthenticated: false,
      token: null,
      username: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};