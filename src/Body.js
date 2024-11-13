import React from 'react';
import { Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import RoundedCorners from './poster';
import ActionAreaCard from './card';


function Body() {
  const [value] = React.useState(2);
  return (
    <Box
    sx={{
      position:'relative',
      flex: 1,
      marginLeft: '250px', // Sidebar width
      marginTop: '35px', // AppBar height (adjust as needed)
      padding: 1, // Optional: add padding inside the body for spacing
    }}
  >
    <Box sx={{ flex: 1, p: 2, position:'relative',left:'-150px',top:'-50px' }}>
      <Typography variant="h4" sx={{position:'relative',marginLeft:'470px'}} gutterBottom>Milestones Of Tollywood</Typography>
      <Stack spacing={1} direction="row" sx={{marginLeft:'380px'}}>
      <Button variant="outlined">Action</Button>
      <Button variant="outlined">Drama</Button>
      <Button variant="outlined">Romance</Button>
      <Button variant="outlined">Horror</Button>
      <Button variant="outlined">Suspense Thriller</Button>
    </Stack>
    </Box>
    <Box>
    <ActionAreaCard/>
    </Box>
    <Box>
    <RoundedCorners/>
    </Box>
    </Box>
    
  );
}

export default Body;