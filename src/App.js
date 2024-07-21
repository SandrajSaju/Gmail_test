import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConnectToGmail from './components/ConnectToGMail';
import OAuth2Callback from './components/OAuth2Callback';
import SendEmail from './components/SendEmail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<ConnectToGmail />} />
          <Route path="/dashboard/oauth2callback" element={<OAuth2Callback />} />
          <Route path="/dashboard/send-email" element={<SendEmail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
