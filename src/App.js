import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
      </Box>
        <Body />
    </Box>
  );
}

export default App;