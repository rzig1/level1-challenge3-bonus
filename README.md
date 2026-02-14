# 🛠️ Technical Interventions Manager

A modern, responsive web application designed to help companies manage and track technical maintenance tasks. This project features a dual-interface system for **Administrators** and **Technicians**, utilizing a RESTful mock backend for real-time data persistence.

---

## 🚀 Project Overview
This application fulfills the core requirements of a technical management system:

- **Role-Based Access**: Switch between Admin and Technician views.
- **Assignment Logic**: Admins can assign tasks to specific team members.
- **Lifecycle Management**: Follows the strict workflow: **To Do → In Progress → Done**.
- **Data Persistence**: Uses a JSON-based database to store interventions and staff details.

---

## 🏗️ Project Structure
```text
/LEVEL1-CHALLENGE
├── /backend
│   └── db.json                          # Mock Database (REST API Source)
├── /frontend
│   ├── /src
│   │   ├── /components
│   │   │   ├── AdminDashboard.jsx       # Admin logic & creation form
│   │   │   ├── AdminDashboard.css       # Admin-specific styles
│   │   │   ├── TechnicianDashboard.jsx  # Technician logic & updates
│   │   │   └── TechnicianDashboard.css  # Technician-specific styles
│   │   ├── api.js                       # Axios configuration
│   │   ├── App.jsx                      # Main entry & role switching
│   │   ├── main.jsx                     # React DOM rendering
│   │   └── style.css                    # Global application styles
│   ├── index.html                       # Entry HTML file
│   ├── package.json                     # Frontend dependencies
│   └── vite.config.js                   # Vite configuration
└── README.md                            # Project documentation

```


🛠️ Setup Guide
1. Prerequisites
Ensure you have Node.js installed on your system.

2. Launch the Backend (JSON Server)
Navigate to the backend folder and start the server to enable the API:

cd backend
json-server --watch db.json --port 3001
The API will be available at: http://localhost:3001.

3. Launch the Frontend
In a new terminal window, navigate to the frontend folder, install dependencies, and start the development server:

cd frontend
npm install
npm run dev
The application will typically run at: http://localhost:5173.

📊 Database Schema (db.json)
The system manages two main collections to ensure data integrity:

Collection	Description	Key Fields
technicians	Staff members available for tasks	id, name
interventions	Technical tickets/tasks	id, title, description, technicianId, status
💡 How to Use
Admin View: Fill out the "Create Intervention" form and assign it to a technician.

Role Switch: Use the toggle buttons at the top to switch between Admin and Technician modes.

Technician View: (Defaulted to Technician ID: 1) View assigned tasks and use the Next Status button to progress through the lifecycle.

🎨 Technologies Used
React.js & Vite: For a high-performance frontend experience.

CSS3: Custom modern styling with a professional SaaS-inspired aesthetic.

JSON-Server: To provide a full mock REST API.

Axios: For seamless HTTP communication between frontend and backend.
