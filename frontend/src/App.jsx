import { useState } from "react"
import AdminDashboard from "./components/AdminDashboard"
import TechnicianDashboard from "./components/TechnicianDashboard"

function App() {
  const [role, setRole] = useState("admin")

  return (
    <div className="container">
      <h1>Technical Interventions Manager</h1>

      <div className="role-switch">
        <button onClick={() => setRole("admin")}>Admin</button>
        <button onClick={() => setRole("tech")}>Technician</button>
      </div>

      {role === "admin" ? <AdminDashboard /> : <TechnicianDashboard />}
    </div>
  )
}

export default App
