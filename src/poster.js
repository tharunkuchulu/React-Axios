import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";



const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  borderRadius:'30px',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: 'transform 0.3s ease-in-out', // Smooth transition for the zoom effect

  '&:hover': {
    transform: 'scale(1.1)', // Zoom effect on hover (adjust scale as needed)
  },
}));

const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Set the theme mode to dark
    },
  });

export default function RoundedCorners() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Box
    sx={{
      display: 'grid',
      gap: 2,
      gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', // Each Paper will take up a minimum of 240px
      padding: 2,
      marginLeft:'-200px',
      '& > :not(style)': {
        width: 240, 
        height: 400, 
      },
    }}
    
    >
      <DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
              color: 'text.primary', }}>
        <img src="kalki.jpg" alt="kalki" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
        <Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
        KALKI 2898 AD
        </Typography>
        <Rating name="read-only" value={5} readOnly />
      </DemoPaper>
    </Box>
    </ThemeProvider>
  );
}
