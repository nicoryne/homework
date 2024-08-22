import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={process.env.PUBLIC_URL + '/logo192.png'} width="40" height="40" alt="logo"/>
          </IconButton>
            <Typography variant="h6" component="div">
              Nicolo Porter
            </Typography>
              <Button color="inherit" sx={{ flexGrow: 1}}></Button>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Profile</Button>
              <Button color="inherit">Message</Button>
              <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}