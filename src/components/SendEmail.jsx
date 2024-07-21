// src/SendEmail.js

import React, { useState } from 'react';
import axios from 'axios';

const SendEmail = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSendEmail = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      const user = JSON.parse(localStorage.getItem('user')).email;

      await axios.post('http://localhost:4000/api/lead/send-email', {
        to,
        subject,
        text,
        accessToken,
        refreshToken,
        user,
      });

      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  return (
    <div>
      <input type="email" value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" />
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Text" />
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default SendEmail;
