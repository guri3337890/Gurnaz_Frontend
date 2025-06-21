import React, { useEffect, useState } from 'react';
import { newsData } from '../data/mockNews';
import PayoutSection from './PayoutSection';

function Dashboard({ user, logout, toggleTheme, dark }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  useEffect(() => {
    setData(newsData);
  }, []);

  const filtered = data.filter((item) => {
    const match = item.title.toLowerCase().includes(search.toLowerCase());
    const matchType = type === 'all' || item.type === type;
    return match && matchType;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="space-x-2">
          <button onClick={toggleTheme} className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded">
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">
            Logout
          </button>
        </div>
      </div>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search articles"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded">
          <option value="all">All</option>
          <option value="news">News</option>
          <option value="blog">Blog</option>
        </select>
      </div>

      <div className="grid gap-4">
        {filtered.map((item, index) => (
          <div key={index} className="border p-4 rounded shadow bg-white dark:bg-gray-800">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p>Author: {item.author}</p>
            <p>Type: {item.type}</p>
            <p>Date: {item.date}</p>
          </div>
        ))}
      </div>

      {user.role === 'admin' && <PayoutSection data={filtered} />}
    </div>
  );
}

export default Dashboard;