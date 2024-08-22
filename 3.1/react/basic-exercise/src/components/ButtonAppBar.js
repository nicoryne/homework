import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#FA8072' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <img src={process.env.PUBLIC_URL + '/fish.svg'} width="40" height="40" alt="logo" />
            </IconButton>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Species</Button>
              <Button color="inherit">Locations</Button>
              <Button color="inherit">FAQs</Button>
            </Box>
          </Box>
          <Typography variant="h5" component="div">
            Fishclopedia
          </Typography>
          <Typography variant="h6" component="div">
            Nicolo Porter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
