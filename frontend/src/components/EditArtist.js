import React, { useState } from 'react';
import {
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import EditIcon from '@mui/icons-material/Edit';

import backgroundImage from '../images/green-background.png';
import { useDropzone } from 'react-dropzone';
import CloseIcon from '@mui/icons-material/Close';
import igLogo from '../images/iglogo.png';
import twitLogo from '../images/twitlogo.png';


const EditArtistPage = ({ artist }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: artist.name,
    bio: artist.bio,
    location: artist.city,
    experience: artist.experience,
    skills: artist.skills,
    socialMedia: artist.socialMedia,
    profileImage: artist.profileImage,
    images: artist.images,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [openProfileDialog, setOpenProfileDialog] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleProfileDialogOpen = () => {
    setOpenProfileDialog(true);
  };

  const handleProfileDialogClose = () => {
    setOpenProfileDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Updated artist data:', formData);
    setIsEditing(false);
  };

  const handleDeleteImage = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index),
    }));
  };

  const handleAddImage = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      likes: 0,
      comments: 0,
    }));
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...newImages],
    }));
  };

  const handleProfilePictureChange = (acceptedFiles) => {
    const newProfileImage = URL.createObjectURL(acceptedFiles[0]);
    setFormData((prevData) => ({
      ...prevData,
      profileImage: newProfileImage,
    }));
    handleProfileDialogClose();
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleAddImage,
    accept: 'image/*',
    multiple: true,
  });

  const { getRootProps: getProfileRootProps, getInputProps: getProfileInputProps } = useDropzone({
    onDrop: handleProfilePictureChange,
    accept: 'image/*',
    multiple: false,
  });

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        padding: '0px',
      }}
    >
      <Container maxWidth="md" style={{ position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={3}
          style={{
            marginTop: '10px',
            padding: '24px',
            minHeight: '850px',
            width: '100%',
            minWidth: '830px',
            backgroundColor: '#ffffff',
          }}
        >
          {/* Edit Button */}
          <IconButton
            onClick={handleEditClick}
            style={{ position: 'absolute', top: '16px', right: '5px' }}
          >
            <EditIcon />
          </IconButton>

          {/* Profile Header */}
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar
                src={formData.profileImage}
                alt={formData.name}
                style={{ width: '100px', height: '100px' }}
              />
              {isEditing && (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleProfileDialogOpen}
                  style={{ marginTop: '8px' }}
                >
                  Edit Profile Picture
                </Button>
              )}
            </Grid>
            <Grid item xs>
              {isEditing ? (
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ marginBottom: '8px' }}
                />
              ) : (
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                  {formData.name}
                </Typography>
              )}
              <Typography variant="subtitle1" color="textSecondary">
                {formData.location} | {formData.experience} years experience
              </Typography>

              {/* Social Media Links */}
              {/* Social Media Links */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                {formData.socialMedia.instagram && (
                  <a
                    href={formData.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <img src={igLogo} alt="Instagram" style={{ width: '24px', height: '24px' }} />
                  </a>
                )}
                {formData.socialMedia.twitter && (
                  <a
                    href={formData.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <img src={twitLogo} alt="Twitter" style={{ width: '30px', height: '24px' }} />
                  </a>
                )}
              </div>

            </Grid>
          </Grid>

          {/* Bio Section */}
          <Typography variant="h6" style={{ marginTop: '16px' }}>
            About Me
          </Typography>
          {isEditing ? (
            <TextField
              fullWidth
              name="bio"
              multiline
              rows={3}
              value={formData.bio}
              onChange={handleChange}
              style={{ marginBottom: '16px' }}
            />
          ) : (
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              {formData.bio}
            </Typography>
          )}

          {/* Skills Section */}
          <Typography variant="h6" style={{ marginTop: '16px' }}>
            Skills
          </Typography>
          {isEditing ? (
            <TextField
              fullWidth
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              style={{ marginBottom: '16px' }}
            />
          ) : (
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              {formData.skills}
            </Typography>
          )}

          {/* Portfolio Gallery */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" style={{ marginTop: '16px' }}>
              My Pictures
            </Typography>
            <Button variant="outlined" color="primary" onClick={handleDialogOpen}>
              Edit Pictures
            </Button>
          </div>
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            {formData.images.map((image, index) => (
              <Grid item xs={4} key={index}>
                <img
                  src={image.url}
                  alt={`Artwork ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Dialog for Editing Gallery Images */}
          <Dialog open={openDialog} onClose={handleDialogClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit Pictures</DialogTitle>
            <DialogContent>
              <div {...getRootProps()} style={{ border: '2px dashed #ddd', padding: '16px', textAlign: 'center', marginBottom: '16px' }}>
                <input {...getInputProps()} />
                <Typography variant="body1">Drag & drop images here, or click to select</Typography>
              </div>
              <Grid container spacing={2}>
                {formData.images.map((image, index) => (
                  <Grid item xs={6} key={index} style={{ position: 'relative' }}>
                    <img
                      src={image.url}
                      alt={`Artwork ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                    <IconButton
                      onClick={() => handleDeleteImage(index)}
                      style={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: 'rgba(255,255,255,0.8)',
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                ))}
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">Done</Button>
            </DialogActions>
          </Dialog>

          {/* Dialog for Editing Profile Picture */}
          <Dialog open={openProfileDialog} onClose={handleProfileDialogClose} fullWidth maxWidth="xs">
            <DialogTitle>Edit Profile Picture</DialogTitle>
            <DialogContent>
              <div {...getProfileRootProps()} style={{ border: '2px dashed #ddd', padding: '16px', textAlign: 'center', marginBottom: '16px' }}>
                <input {...getProfileInputProps()} />
                <Typography variant="body1">Drag & drop a new profile picture here, or click to select</Typography>
              </div>
              {formData.profileImage && (
                <Avatar
                  src={formData.profileImage}
                  alt="Profile"
                  style={{
                    width: '150px',
                    height: '150px',
                    margin: 'auto',
                    display: 'block',
                    marginTop: '16px',
                  }}
                />
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleProfileDialogClose} color="primary">Done</Button>
            </DialogActions>
          </Dialog>

          {/* Save Button */}
          {isEditing && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSave}
              style={{ marginTop: '16px', marginLeft: '16px' }}
            >
              Save Changes
            </Button>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default EditArtistPage;