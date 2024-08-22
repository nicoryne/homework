import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import BreadCrumbs from './components/BreadCrumbs'
import Grid from '@mui/material/Grid';
import Card from './components/Card';
import SpeedDial from './components/SpeedDial'

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>

      <div className="App-body">
        <BreadCrumbs />

        <Grid container spacing={1} mt={2}>
          <Grid item xs={6} md={3}>
            <Card>xs=6 md=8</Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>xs=6 md=4</Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>xs=6 md=4</Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>xs=6 md=8</Card>
          </Grid>
        </Grid>
      </div>
  
      <SpeedDial />

    </div>
  );
}

export default App;