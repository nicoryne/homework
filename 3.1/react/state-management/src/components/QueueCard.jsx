import { useEffect, useState } from "react";
import MySetTimeOut from "./MySetTimeOut";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import TaskBox from "./TaskBox";

export default function QueueCard({ priority, queueKey, tasks }) {
  const [duration, setDuration] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const totalDuration = tasks.reduce((acc, task) => acc + task.duration, 0);
    setDuration(totalDuration);
  }, [tasks]);

  const isHighPriority = priority === "high";

  return (
    <div>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          backgroundColor: "transparent",
          border: isHighPriority
            ? `2px solid ${theme.palette.error.dark}`
            : `1px solid ${theme.palette.grey[500]}`,
          borderRadius: 3,
          color: theme.palette.common.white,
        }}
      >
        <Typography variant="h6" alignSelf="center" marginBottom={1}>
          {isHighPriority
            ? "High Priority Queue"
            : `Normal Priority Queue #${queueKey}`}
        </Typography>

        <Typography color="inherit" marginBottom={1}>
          Queue List
        </Typography>
        

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {tasks.map((task, index) => (
            <TaskBox key={index} duration={task.duration} />
          ))}
        </Box>

        <Typography color="inherit" marginTop={1}>
          Duration
        </Typography>

        <Box sx={{ display: "flex" }}>
          <MySetTimeOut
            duration={duration}
            setDuration={setDuration}
            cardWidth={420}
          />
        </Box>
      </Card>
    </div>
  );
}
