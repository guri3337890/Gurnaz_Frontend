import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { USERS } from './data/users';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogin = (email, password) => {
    const found = USERS.find((u) => u.email === email && u.password === password);
    if (found) {
      localStorage.setItem('user', JSON.stringify(found));
      setUser(found);
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className={dark ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white min-h-screen'}>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard user={user} logout={logout} toggleTheme={() => setDark(!dark)} dark={dark} />
      )}
    </div>
  );
}

export default App;