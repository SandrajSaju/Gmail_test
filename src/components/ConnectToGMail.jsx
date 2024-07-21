// src/App.js

import React from 'react';

const ConnectToGmail = () => {
//   const handleConnectToGmail = () => {
//     const clientId = "841018037005-8f614km5tbrduqutkdv3s13serjuqg1p.apps.googleusercontent.com";
//     const redirectUri = "http://localhost:3000/dashboard/oauth2callback";
//     const scope = "https://www.googleapis.com/auth/gmail.send";
//     const responseType = "code";

//     const oauthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&access_type=offline`;

//     window.location.href = oauthUrl;
//   };

const handleConnectToGmail = () => {
    window.location.href = 'http://localhost:4000/api/lead/auth/google';
  };

  return (
    <div>
      <button onClick={handleConnectToGmail}>Connect to Gmail</button>
    </div>
  );
};

export default ConnectToGmail;
