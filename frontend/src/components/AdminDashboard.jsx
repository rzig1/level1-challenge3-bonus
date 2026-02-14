import { useEffect, useState } from "react"
import { api } from "../api"
import './AdminDashboard.css'

export default function AdminDashboard() {
  const [interventions, setInterventions] = useState([])
  const [technicians, setTechnicians] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [technicianId, setTechnicianId] = useState("")

  const loadData = async () => {
    try {
      const [interventionsRes, techniciansRes] = await Promise.all([
        api.get("/interventions"),
        api.get("/technicians")
      ])

      setInterventions(interventionsRes.data)
      setTechnicians(techniciansRes.data)
    } catch (error) {
      console.error("Error loading data:", error)
    }
  }

useEffect(() => {
  const fetchData = async () => {
    try {
      const [interventionsRes, techniciansRes] = await Promise.all([
        api.get("/interventions"),
        api.get("/technicians")
      ])

      setInterventions(interventionsRes.data)
      setTechnicians(techniciansRes.data)
    } catch (error) {
      console.error("Error loading data:", error)
    }
  }

  fetchData()
}, [])

  const createIntervention = async () => {
    if (!title || !description || !technicianId) return

    try {
      await api.post("/interventions", {
        title,
        description,
        technicianId: Number(technicianId),
        status: "To Do"
      })

      setTitle("")
      setDescription("")
      setTechnicianId("")
      loadData()
    } catch (error) {
      console.error("Error creating intervention:", error)
    }
  }

  return (
  <div className="admin-container">
    <h2 className="admin-title">Admin Dashboard</h2>

    <div className="admin-card">
      <h3>Create Intervention</h3>

      <input
        className="admin-input"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        className="admin-input"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <select
        className="admin-select"
        value={technicianId}
        onChange={e => setTechnicianId(e.target.value)}
      >
        <option value="">Select Technician</option>
        {technicians.map(t => (
          <option key={t.id} value={t.id}>{t.name}</option>
        ))}
      </select>

      <button className="admin-button" onClick={createIntervention}>
        Create
      </button>
    </div>

    <h3>All Interventions</h3>
    {interventions.map(i => (
      <div key={i.id} className="admin-card intervention-item">
        <strong>{i.title}</strong>
        <p>{i.description}</p>
        <p>Status: {i.status}</p>
      </div>
    ))}
  </div>
)

}
