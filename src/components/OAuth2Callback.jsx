// src/OAuth2Callback.js

import React, { useEffect } from 'react';
import axios from 'axios';

const OAuth2Callback = () => {
  useEffect(() => {
    const getTokens = async (code) => {
      try {
        const response = await axios.post('http://localhost:4000/api/lead/oauth2callback', { code });
        const { accessToken, refreshToken, user } = response.data;
        
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('user', JSON.stringify(user));

        window.location.href = '/dashboard/send-email'; // Redirect to home page or wherever you want
      } catch (error) {
        console.error('Error fetching tokens', error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      getTokens(code);
    }
  }, []);

  return <div>Loading...</div>;
};

export default OAuth2Callback;
