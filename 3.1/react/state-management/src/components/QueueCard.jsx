import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import MySetTimeOut from "./MySetTimeOut";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)(({}) => ({
  width: 500,
  height: 200,
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  backgroundColor: "#000000",
}));

export default function QueueCard() {
  const [tasks, setTasks] = useState([]);
  const [duration, setDuration] = useState(150);

  useEffect(() => {
    console.log(duration);
  }, [duration]);

  return (
    <div>
      <StyledCard>
        <Typography variant="h4" color="white">Priority Queue</Typography>

        <Typography>Queue List</Typography>

        <Typography>Duration</Typography>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <MySetTimeOut duration={duration} setDuration={setDuration} />
        </Box>
      </StyledCard>
    </div>
  );
}
