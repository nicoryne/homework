import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import MyButton from './MyButton';


export default function ButtonPanel() {
  return (
    <Box display="flex" justifyContent="center" width="100vw">
      <Grid container spacing={{xs: 1, md: 2}} size={8}>
        {Array.from(Array(9)).map((_, index) => (
          <Grid item size={4} key={index}>
            <MyButton />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
