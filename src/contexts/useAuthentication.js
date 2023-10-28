import { useState, useEffect } from 'react';
import axios from 'autoprefixer';

const useAuthentication = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchUser();
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/login', { email, password });
      setToken(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return { token, user, isLoading, login, logout };
};

export default useAuthentication;
