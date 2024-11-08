import React from 'react';

function Banner() {
    return (
      <div style={{
        backgroundColor: '#28a745', // Green background
        color: '#000',               // Black text color
        padding: '20px',             // Increased padding for thickness
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '24px',            // Larger font size
        position: 'fixed',           // Fixed at the top
        top: '0',
        width: '100%',
        zIndex: '1000'               // Ensures it stays above other elements
      }}>
        Atelier
      </div>
    );
  }

  export default Banner;