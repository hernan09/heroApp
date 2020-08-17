import React, { useReducer } from 'react';
import AppRouters from './routers/AppRouters';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouters></AppRouters>
    </AuthContext.Provider>
  );
};
