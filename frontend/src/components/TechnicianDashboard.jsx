import { useEffect, useState } from "react"
import { api } from "../api"
import "./TechnicianDashboard.css"
export default function TechnicianDashboard() {
  const technicianId = 1 // simulate logged-in technician (number)
  const [interventions, setInterventions] = useState([])

  const loadInterventions = async () => {
    try {
      const res = await api.get(
        `/interventions?technicianId=${technicianId}`
      )
      setInterventions(res.data)
    } catch (error) {
      console.error("Error loading interventions:", error)
    }
  }

useEffect(() => {
  const fetchInterventions = async () => {
    try {
      const res = await api.get(
        `/interventions?technicianId=${technicianId}`
      )
      setInterventions(res.data)
    } catch (error) {
      console.error("Error loading interventions:", error)
    }
  }

  fetchInterventions()
}, [technicianId])


  const updateStatus = async (id, currentStatus) => {
    const nextStatus =
      currentStatus === "To Do"
        ? "In Progress"
        : "Done"

    try {
      await api.patch(`/interventions/${id}`, {
        status: nextStatus
      })
      loadInterventions()
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }

return (
  <div className="tech-container">
    <h2>Technician Dashboard</h2>

    {interventions.length === 0 && (
      <p className="no-data">No assigned interventions</p>
    )}

    {interventions.map(i => (
      <div key={i.id} className="tech-card">
        <h3>{i.title}</h3>
        <p>{i.description}</p>
        <p className="tech-status">Status: {i.status}</p>

        {i.status !== "Done" && (
          <button
            className="tech-button"
            onClick={() => updateStatus(i.id, i.status)}
          >
            Next Status
          </button>
        )}
      </div>
    ))}
  </div>
)

}
