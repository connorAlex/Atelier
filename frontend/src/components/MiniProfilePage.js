import React from 'react';
import { Paper, Avatar, Typography, IconButton, Button, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const MiniProfilePage = ({ artist, onClose }) => {
    if (!artist) return null;

    return (
        <Paper
            elevation={3}
            style={{
                width: '100%',
                maxWidth: '1400px',
                margin: 'auto',
                marginTop: '70px',
                minHeight: '744px',
                borderRadius: '8px',
                padding: '24px',
                position: 'relative',
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
                <strong>Location:</strong> {artist.location || "San Francisco, CA"}
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
                <Typography variant="body1"><strong>Social Media:</strong></Typography>
                <a href={artist.socialMedia.instagram} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px', color: '#3f729b', textDecoration: 'none' }}>Instagram</a>
                {artist.socialMedia.twitter && 
                    <a href={artist.socialMedia.twitter} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px', color: '#1da1f2', textDecoration: 'none' }}>Twitter</a>}
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
        </Paper>
    );
};

export default MiniProfilePage;