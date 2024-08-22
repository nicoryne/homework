import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import BreadCrumbs from './components/BreadCrumbs'
import Grid from '@mui/material/Grid';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>

      <div className="App-body">
        <BreadCrumbs />

        <Grid container spacing={1} mt={1}>
          <Grid item xs={4} md={4}>
            <Card>xs=2 md=2</Card>
          </Grid>
          <Grid item xs={4} md={4}>
            <Card>xs=6 md=4</Card>
          </Grid>
          <Grid item xs={4} md={4}>
            <Card>xs=6 md=4</Card>
          </Grid>
          <Grid item xs={4} md={4}>
            <Card>xs=6 md=8</Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;