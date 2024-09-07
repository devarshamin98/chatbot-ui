
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Chatbot from './components/Chatbot';

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <div className="App">
      {token ? (
        <Chatbot token={token} />
      ) : (
        <Login setAuth={setToken} />
      )}
    </div>
  );
}

export default App;
