import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import MapComponent from './MapComponent';
import "./App.css"

function App() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Google Maps: Hello Word
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <MapComponent />
        </Box>
      </Box>
    </Container>
  );
}

export default App;

