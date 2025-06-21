 # Frontend Dashboard Assignment

This is a responsive frontend dashboard built with **React** and **Tailwind CSS**, featuring:
- ✅ Email/password login (with admin/user roles)
- 📰 News article feed (mock data)
- 🔍 Search and filter functionality
- 🌗 Dark mode toggle
- 💰 Admin-only payout calculator
- 📤 Export data to CSV

## 🔧 How to Run(importanat part)........

1. **Install dependencies**:

```bash
npm install
```

2. **Start the development server**:

```bash
npm start
```

The app runs at `http://localhost:3000`.

## 🔐 Login Credentials

| Role  | Email                | Password   |
|-------|----------------------|------------|
| Admin | admin@example.com    | admin123   |
| User  | user@example.com     | user123    |

## 📂 Project Structure

```
frontend-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── PayoutSection.jsx
│   ├── data/
│   │   ├── users.js
│   │   └── mockNews.js
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🧪 Tech Stack

- React 18
- Tailwind CSS
- file-saver (for CSV export)
- LocalStorage for session and payout rate persistence

---

Built with ❤️ for the Frontend Developer Assignment.
