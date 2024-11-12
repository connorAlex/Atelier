import React, { useState } from 'react';
import './AppointmentViewer.css';
import ToolBar from '../shared-components/Toolbar';

const AppointmentViewer = () => {
  // Initial appointments list
  const [appointments, setAppointments] = useState([
    { id: 1, name: "John Doe", date: "2024-11-15", time: "10:00 AM", confirmed: false },
    { id: 2, name: "Jane Smith", date: "2024-11-20", time: "02:00 PM", confirmed: false }
  ]);

  // Confirm an appointment
  const confirmAppointment = (id) => {
    setAppointments(appointments.map(appointment => 
      appointment.id === id ? { ...appointment, confirmed: true } : appointment
    ));
  };

  // Delete an appointment
  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <div>
    <ToolBar keepSearch={false}/>
    <div className="appointment-viewer">
      <h2>Scheduled Appointments</h2>
      <ul className="appointment-list">
        {appointments.map(appointment => (
          <li key={appointment.id} className="appointment-item">
            <div className="appointment-name">{appointment.name}</div>
            <div className="appointment-details">
              <div>{appointment.date}</div>
              <div className="appointment-time">{appointment.time}</div>
            </div>
            {!appointment.confirmed ? (
              <div className="action-buttons">
                <button className="tick-button" onClick={() => confirmAppointment(appointment.id)}>✔️</button>
                <button className="cross-button" onClick={() => deleteAppointment(appointment.id)}>❌</button>
              </div>
            ) : (
              <div className="confirmed-label">Confirmed</div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
};

export default AppointmentViewer;