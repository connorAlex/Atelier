import React, { useState } from 'react';
import { TextField, Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './AppointmentScheduler.css';

const AppointmentScheduler = () => {
  // State for the list of appointments
  const [appointments, setAppointments] = useState([]);
  
  // State for new appointment form inputs
  const [newAppointment, setNewAppointment] = useState({ name: '', date: '', time: '' });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment(prevState => ({ ...prevState, [name]: value }));
  };

  // Add new appointment to the list
  const addAppointment = (e) => {
    e.preventDefault();
    if (newAppointment.name && newAppointment.date && newAppointment.time) {
      setAppointments([...appointments, { ...newAppointment, id: Date.now(), confirmed: false }]);
      setNewAppointment({ name: '', date: '', time: '' }); // Reset form
    }
  };

  // Delete an appointment
  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <div className="appointment-scheduler">
      <h2>Schedule an Appointment</h2>
      <form onSubmit={addAppointment} className="appointment-form">
        <TextField 
          label="Name"
          name="name" 
          variant="outlined"
          value={newAppointment.name} 
          onChange={handleInputChange} 
          required 
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField 
          label="Date"
          name="date" 
          type="date"
          variant="outlined"
          value={newAppointment.date} 
          onChange={handleInputChange} 
          required 
          fullWidth
          InputLabelProps={{ shrink: true }}
          style={{ marginBottom: '16px' }}
        />
        <TextField 
          label="Time"
          name="time" 
          type="time"
          variant="outlined"
          value={newAppointment.time} 
          onChange={handleInputChange} 
          required 
          fullWidth
          InputLabelProps={{ shrink: true }}
          style={{ marginBottom: '16px' }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Appointment
        </Button>
      </form>

      <List style={{ marginTop: '24px' }}>
        {appointments.map(appointment => (
          <ListItem key={appointment.id} className="appointment-item">
            <ListItemText
              primary={appointment.name}
              secondary={`${appointment.date} at ${appointment.time}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => deleteAppointment(appointment.id)}>
                <CloseIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AppointmentScheduler;