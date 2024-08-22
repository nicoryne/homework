import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 86 }}
        image={process.env.PUBLIC_URL + '/nemo.jpeg'}
        title="i like nemo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nemo is cool!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I LOVE NEMO!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Catch Fish</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}