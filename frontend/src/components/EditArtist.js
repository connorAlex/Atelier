import React, { useState } from 'react';
import {
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

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

  const handleEditClick = () => {
    setIsEditing(!isEditing);
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

  return (
    <Container maxWidth="md" style={{ marginTop: '24px' }}>
      <Paper elevation={3} style={{ padding: '24px', position: 'relative' }}>
        {/* Edit Button */}
        <IconButton
          onClick={handleEditClick}
          style={{ position: 'absolute', top: '16px', right: '16px' }}
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
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              style={{ marginBottom: '8px' }}
            />
            <Typography variant="subtitle1" color="textSecondary">
              {formData.location} | {formData.experience} years experience
            </Typography>
          </Grid>
        </Grid>

        {/* Bio Section */}
        <Typography variant="h6" style={{ marginTop: '16px' }}>
          About Me
        </Typography>
        <TextField
          fullWidth
          name="bio"
          multiline
          rows={3}
          value={formData.bio}
          onChange={handleChange}
          disabled={!isEditing}
          style={{ marginBottom: '16px' }}
        />

        {/* Skills Section */}
        <Typography variant="h6" style={{ marginTop: '16px' }}>
          Skills
        </Typography>
        <TextField
          fullWidth
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          disabled={!isEditing}
          style={{ marginBottom: '16px' }}
        />

        {/* Social Media Links */}
        <Typography variant="h6" style={{ marginTop: '16px' }}>
          Social Media
        </Typography>
        <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
          {formData.socialMedia.instagram && (
            <a
              href={formData.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="large" color="action" />
            </a>
          )}
          {formData.socialMedia.twitter && (
            <a
              href={formData.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon fontSize="large" color="action" />
            </a>
          )}
        </div>

        {/* Portfolio Gallery */}
        <Typography variant="h6" style={{ marginTop: '16px' }}>
          Portfolio
        </Typography>
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

        {/* Call-to-Action Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '24px' }}
        >
          Make Appointment
        </Button>

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
  );
};

export default EditArtistPage;