// ArtistsPage.js
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import ArtistList from './ArtistList';
import ArtistProfile from './MiniProfilePage';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const ArtistsPage = ({artists}) => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const navigate = useNavigate()
  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
  };

  const handleCloseProfile = () => {
    setSelectedArtist(null);
  };
  const handleEditClick = () => {
    navigate('/edit-page'); 
  };
  return (
    <div style={{ position: 'relative', height: '100vh', padding: '16px' }}>
    {/* Edit Button at Top Right */}
    <IconButton
        onClick={handleEditClick}
        style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        color: 'grey',
        }}
    >
        <AccountCircleIcon fontSize="large" />
    </IconButton>

    <Grid container spacing={2} style={{ height: '100%' }}>
        <ArtistList artists={artists} handleArtistClick={handleArtistClick} />
        {selectedArtist && <ArtistProfile artist={selectedArtist} onClose={handleCloseProfile} />}
    </Grid>
    </div>
  
  );
};

export default ArtistsPage;