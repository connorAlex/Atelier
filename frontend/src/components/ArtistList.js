import React, { useState, useRef, useEffect } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Paper, Avatar, Typography } from '@mui/material';
import './ArtistList.css'
const ArtistList = ({ selectedUser, artists , setUser, handleArtistClick}) => {
   const itemRefs = useRef([])
   const [artistsState, setArtistsState] = useState()

   const scrollToItem = (i) => {
    if (itemRefs.current[i]) {
      itemRefs.current[i].scrollIntoView({ behavior: 'smooth', block:'center'})
    }
   }
   useEffect(()=> {
    setArtistsState(artists)
   },[])
   
   useEffect(() => {
    scrollToItem(selectedUser)
   },[selectedUser])

  return (
        <Paper  elevation={3} style={{zIndex:'2', marginTop: "5%", left: '0', position:'absolute', maxHeight: '650px',  marginLeft: "10px", borderRadius: '8px',padding: '16px', maxWidth: '350px', width: '100%', height: '100%'}}>
        <Typography variant="h6" style={{ marginBottom: '8px' }}>
          Artists Near You
        </Typography>
        <div className = "artist-list"style={{ overflowY: 'auto', flex: 1,overflow: 'auto', maxHeight: '600px'}}>
        <List>
            {artists.map((artist, index) => (
            <ListItem
                key={index}
                ref = {(el) => (itemRefs.current[index] = el)}
                onClick={() => setUser(artist)}
                sx={{}}
                style={{
                  border: artist.id === selectedUser.id? '2px solid #ddd': '1px solid #ddd',
                  
                  borderRadius: '8px', 
                  marginBottom: '12px',
                  padding: '16px', 
                  cursor: 'pointer',
                  backgroundColor: artist.id === selectedUser.id? "#e3e3e3": "#f9f9f9", 
                  boxShadow: artist.id === selectedUser.id? '0px 4px 10px rgba(0, 0, 0, 0.2)' :'0px 2px 5px rgba(0, 0, 0, 0.1)', 
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease', 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)'; 
                  e.currentTarget.style.transform = 'translateY(-2px)'; 
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.1)'; 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                }}
                
                >
                
                <Avatar 
                src={artist.profileImage}
                 style={{
                   width: '50px',  
                   height: '50px',  
                 }}>
                </Avatar>
                <ListItemText style = {{marginLeft: '10px'}} primary={artist.name} secondary={artist.profession} />
            </ListItem>
            ))}
        </List>
        </div>
        </Paper>
  );
};

export default ArtistList;