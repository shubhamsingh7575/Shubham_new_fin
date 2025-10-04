# Zerodha Clone

A full-stack clone of the Zerodha trading platform built using **React, Bootstrap, Material UI, Node.js, Express.js, and MongoDB**.  
The project is divided into two parts: **Frontend (Landing Pages)** and **Dashboard (Trading Panel)**.  

---

## 🌐 Live Demo

- **Frontend (Landing Pages):** [https://investora.netlify.app/](https://investora.netlify.app/)  
- **Dashboard (Trading Panel):** [https://iadashboard.netlify.app/](https://iadashboard.netlify.app/)  

---

## 📂 Folder Structure

```
Investora_project/
│
├── backend/                  # Backend - Express.js + MongoDB
│   ├── models/               # Database models
│   │   ├── holdingmodels.js
│   │   ├── ordermodel.js
│   │   └── positionmodel.js
│   │
│   ├── schema/               # MongoDB schemas
│   │   ├── holdingschema.js
│   │   ├── orderschema.js
│   │   └── positionschema.js
│   │
│   └── index.js             # Express app entry point (future authentication, APIs)
│
├── dashboard/                # Trading Dashboard (React app)
│   └── src/components/
│       ├── apps.jsx
│       ├── buyactionwindow.jsx
│       ├── dashboard.jsx
│       ├── doughnoutchart.jsx
│       ├── funds.jsx
│       ├── generalcontext.jsx
│       ├── holdings.jsx
│       ├── home.jsx
│       ├── menu.jsx
│       ├── orders.jsx
│       ├── positions.jsx
│       ├── summary.jsx
│       ├── topbar.jsx
│       └── verticalgraph.jsx
│
├── frontend/                 # Landing Pages (React app)
│   ├── public/photos         # Static images
│   └── src/landing_page/
│       ├── about/
│       ├── home/
│       ├── pricing/
│       ├── products/
│       ├── signup/
│       ├── support/
│       ├── footer.jsx
│       ├── navbar.jsx
│       ├── notfound.jsx
│       └── openaccount.jsx
│
├── README.md                 # Project documentation
└── package.json              # Common package dependencies
```

---

## 🛠️ Tech Stack

- **Frontend:** React, Bootstrap, Material UI  
- **Dashboard:** React (Protected routes planned for authentication)  
- **Backend:** Node.js, Express.js, MongoDB  
- **Testing:** Jest  

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/shubhamsingh7575/Shubham_new_fin
cd Investora_project
```

---

### 2. Setup Frontend (Landing Pages)
```bash
cd frontend
npm install
npm run dev
```
👉 Runs on **http://localhost:5173**

---

### 3. Setup Dashboard (Trading Panel)
```bash
cd dashboard
npm install
npm run dev
```
👉 Runs on **http://localhost:5174**

---

### 4. Setup Backend
```bash
cd backend
npm install
nodemon index.js
```
👉 Runs on **http://localhost:3002** || https://invest-backend-guek.onrender.com



---

## 🧪 Running Tests
```bash
npm test
```
Runs unit tests using **Jest**.

---

## 🔮 Features (So Far)

- ✅ Fully responsive Zerodha-like landing pages  
- ✅ Trading dashboard UI with charts, orders, holdings, positions  
- ✅ Clean project structure (frontend + dashboard + backend separated)  
- ❌ Authentication not yet implemented (planned with JWT + OTP login system)  
- ❌ API integration pending  

---

## 📌 Future Roadmap

- [ ] Authentication with **mobile number + OTP + JWT**  
- [ ] Secure user sessions  
- [ ] Link holdings/orders/positions with user accounts  

---

## 🤝 Contribution

1. Fork the repo  
2. Create your feature branch: `git checkout -b feature-name`  
3. Commit your changes: `git commit -m 'Add new feature'`  
4. Push to branch: `git push origin feature-name`  
5. Open a Pull Request  

---

## 👨‍💻 Author

- **Shubham Singh**  
GitHub: [shubhamsingh7575](https://github.com/shubhamsingh7575/)  
