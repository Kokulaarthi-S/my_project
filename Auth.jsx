import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Auth = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  const signup = (email, password) =>
    axios.post('/signup', { email, password });

  const login = async (email, password) => {
    const { data } = await axios.post('/login', { email, password });
    localStorage.setItem('token', data.token);
    setToken(data.token);
    navigate('/login', { replace: true });
  };

  return (
    <Auth.Provider value={{ token, signup, login }}>
      {children}
    </Auth.Provider>
  );
}
