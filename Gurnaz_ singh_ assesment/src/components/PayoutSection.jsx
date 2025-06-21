import React, { useState } from 'react';
import { saveAs } from 'file-saver';

function PayoutSection({ data }) {
  const [rate, setRate] = useState(() => +localStorage.getItem('rate') || 10);

  const updateRate = (value) => {
    setRate(value);
    localStorage.setItem('rate', value);
  };

  const total = data.length * rate;

  const exportCSV = () => {
    const rows = [['Title', 'Author', 'Date', 'Type']];
    data.forEach((item) => rows.push([item.title, item.author, item.date, item.type]));
    const csv = rows.map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'news_export.csv');
  };

  return (
    <div className="mt-6 bg-green-100 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Admin Payout Section</h2>
      <div className="flex items-center gap-2 mb-2">
        <label className="font-semibold">Rate per Article:</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => updateRate(+e.target.value)}
          className="border p-1 rounded w-24"
        />
        <span className="ml-4 font-semibold">Total Payout: ₹{total}</span>
      </div>
      <button onClick={exportCSV} className="bg-blue-500 text-white px-4 py-1 rounded">Export CSV</button>
    </div>
  );
}

export default PayoutSection;