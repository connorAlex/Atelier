import React, { useState } from 'react';
import { Paper, Avatar, Typography, IconButton, DialogActions, Button, Divider, Dialog, DialogContent, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import igLogo from '../images/iglogo.png';
import twitLogo from '../images/twitlogo.png';
import AppointmentScheduler from './AppointmentScheduler'; // Import the scheduler component

const MiniProfilePage = ({ artist, onClose }) => {
    const [openScheduler, setOpenScheduler] = useState(false);

    if (!artist) return null;

    const toggleAppointments = () => {
        setOpenScheduler(true)
    }
   

    return (
        <Paper
            elevation={3}
            style={{
                width: '100%',
                maxWidth: '900px',
                margin: 'auto',
                height: "100%",
                marginTop: '5%',
                minHeight: '650px',
                maxHeight: "650px",
                borderRadius: '8px',
                padding: '24px',
                position: 'absolute',
                marginLeft: '30%',
                zIndex: 1,
                
                
                
            }}
        >
            {/* Header with Avatar, Name, and Close Button */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <Avatar
                    src={artist.profileImage}
                    alt={artist.name}
                    style={{ width: '80px', height: '80px', marginRight: '16px' }}
                />
                <div style={{ flexGrow: 1 }}>
                    <Typography variant="h4">{artist.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{artist.profession}</Typography>
                </div>
                <IconButton onClick={onClose} style={{ position: 'absolute', right: '16px', top: '16px' }}>
                    <CloseIcon />
                </IconButton>
            </div>

            {/* Bio and Details */}
            <Typography variant="body1" style={{ marginBottom: '8px' }}>
                <strong>Bio:</strong> {artist.bio || "A passionate digital illustrator exploring vibrant and dynamic art forms."}
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: '8px' }}>
                <strong>Location:</strong> {artist.city || "San Francisco, CA"}
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: '16px' }}>
                <strong>Experience:</strong> {artist.experience || "5 years"}
            </Typography>
            
            {/* Skills */}
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
                <strong>Skills:</strong> {artist.skills || "Digital Painting, Illustration, Concept Art"}
            </Typography>

            {/* Social Media Links */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <Typography variant="body1" style={{ marginRight: '8px' }}><strong>Social Media:</strong></Typography>
                {artist.socialMedia.instagram && (
                    <a href={artist.socialMedia.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#3f729b', textDecoration: 'none', marginRight: '8px' }}>
                        <img src={igLogo} alt="Instagram" style={{ width: '24px', height: '24px' }} />
                    </a>
                )}
                {artist.socialMedia.twitter && (
                    <a href={artist.socialMedia.twitter} target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>
                        <img src={twitLogo} alt="Twitter" style={{ width: '30px', height: '24px' }} />
                    </a>
                )}
            </div>

            <Divider style={{ marginBottom: '24px' }} />

            {/* Artwork Images */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                {artist.images && artist.images.map((image, index) => (
                    <div key={index} style={{ width: '23%' }}>
                        <img
                            src={image.url}
                            alt={`${artist.name} artwork ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Make Appointment Button */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={toggleAppointments}
                    style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '12px 24px',
                    }}
                >
                    Make Appointment
                </Button>
            </div>

            {/* Appointment Scheduler Dialog */}
            <Dialog open={openScheduler} onClose={onClose} fullWidth maxWidth="sm">
                <DialogTitle>Schedule an Appointment</DialogTitle>
                <DialogContent>
                    <AppointmentScheduler />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default MiniProfilePage;