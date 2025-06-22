# 🧩 Frontend Dashboard Assignment

A responsive and dynamic frontend dashboard built with **React** and **Tailwind CSS**, developed as part of a frontend developer assessment.

---

## 🚀 Features

- 🔐 Email/password login with **Admin** and **User** roles
- 📰 Mock news article feed
- 🔍 Real-time **search and filter** functionality
- 🌗 **Dark mode** toggle
- 💰 **Admin-only payout calculator**
- 📤 Export data to **CSV**
- 💾 Session and payout rate persistence using **localStorage**

---

## 🔧 How to Run (Important)

> Make sure you are in the root directory where this project folder exists.

1. **Navigate into the project folder**:
   ```bash
   cd Gurnaz_Frontend-main
   cd "Gurnaz_ singh_ assesment"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

> The app will be running at: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Login Credentials

| Role  | Email              | Password   |
|-------|--------------------|------------|
| Admin | admin@example.com  | admin123   |
| User  | user@example.com   | user123    |

---

## 🗂️ Project Structure

```
Gurnaz_ singh_ assesment/
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

---

## 🧪 Tech Stack

- ⚛️ React 18
- 💨 Tailwind CSS
- 📦 `file-saver` for CSV export
- 💾 localStorage for session and settings persistence

---

## 📌 Notes

Built with ❤️ as part of a **Frontend Developer Assessment**.
