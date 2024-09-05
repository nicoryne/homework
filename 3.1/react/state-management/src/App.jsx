import "./App.css";
import QueueCard from "./components/QueueCard";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Grid
        container
        columns={2}
        padding={2}
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
        sx={{
          width: "60%",
          border: 1,
          borderColor: "#3F3F3F",
          borderRadius: 2,
          boxShadow: 4,
        }}>
          <Button>Add Random Task</Button>
          <Typography>Task Queue</Typography>
          <Button>Admit Task</Button>
        </Box>
        <Grid
          columns={1}
          rows={3}
          container
          direction="column"
          spacing={2}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
            border: 1,
            borderColor: "#3F3F3F",
            borderRadius: 2,
            boxShadow: 4,
          }}
        >
          <QueueCard />
          <QueueCard />
          <QueueCard />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
