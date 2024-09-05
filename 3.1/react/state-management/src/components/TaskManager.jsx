import { useState, useCallback, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { Button, Box, Typography } from "@mui/material";
import TaskBox from "./TaskBox";
import QueueCard from "./QueueCard";

const getRandomDuration = () => Math.floor(Math.random() * (100 - 15 + 1)) + 15;
const getRandomPriority = () => (Math.random() < 0.3 ? "high" : "normal");

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [highPriorityQueue, setHighPriorityQueue] = useState([]);
  const [normalPriorityQueues, setNormalPriorityQueues] = useState([
    [],
    [],
    [],
  ]);

  const addRandomTask = () => {
    const newTask = {
      duration: getRandomDuration(),
      priority: getRandomPriority(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const admitTasks = useCallback(() => {
    if (tasks.length === 0) return;

    const [task, ...remainingTasks] = tasks;
    if (task.priority === "high") {
      setHighPriorityQueue((prevQueue) => [...prevQueue, task]);
    } else {
      const minIndex = normalPriorityQueues
        .map((queue) => queue.reduce((acc, task) => acc + task.duration, 0))
        .indexOf(
          Math.min(
            ...normalPriorityQueues.map((queue) =>
              queue.reduce((acc, task) => acc + task.duration, 0)
            )
          )
        );
      setNormalPriorityQueues((prevQueues) => {
        const newQueues = [...prevQueues];
        newQueues[minIndex].push(task);
        return newQueues;
      });
    }

    setTasks(remainingTasks);
  }, [tasks, normalPriorityQueues]);

  const updateDurations = () => {
    setHighPriorityQueue((prevQueue) => {
      if (prevQueue.length === 0) return prevQueue;
      const [firstTask, ...rest] = prevQueue;
      const updatedQueue = [
        { ...firstTask, duration: firstTask.duration - 1 },
        ...rest,
      ].filter((task) => task.duration > 0);
      return updatedQueue;
    });

    setNormalPriorityQueues((prevQueues) => {
      return prevQueues.map((queue) => {
        if (queue.length === 0) return queue;
        const [firstTask, ...rest] = queue;
        const updatedQueue = [
          { ...firstTask, duration: firstTask.duration - 1 },
          ...rest,
        ].filter((task) => task.duration > 0);
        return updatedQueue;
      });
    });
  };

  useEffect(() => {
    const intervalId = setInterval(updateDurations, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
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
          width: "70%",
          border: 1,
          borderColor: "#3F3F3F",
          borderRadius: 2,
          boxShadow: 4,
          padding: 2,
        }}
      >
        <Button onClick={addRandomTask}>Add Random Task</Button>
        <Box
          sx={{
            marginY: 2,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {tasks.map((task, index) => (
            <TaskBox
              key={index}
              duration={task.duration}
              priority={task.priority}
            />
          ))}
        </Box>
        <Typography>Task Queue</Typography>
        <Button onClick={admitTasks}>Admit Task</Button>
      </Box>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{
          height: "100%",
          width: "29%",
          display: "flex",
          justifyContent: "space-between",
          padding: 2,
          border: 1,
          borderColor: "#3F3F3F",
          borderRadius: 2,
          boxShadow: 4,
        }}
      >
        <QueueCard
          priority={"high"}
          tasks={highPriorityQueue}
          setTasks={setHighPriorityQueue}
        />
        {normalPriorityQueues.map((queue, index) => (
          <QueueCard
            key={index}
            queueKey={index + 1}
            tasks={queue}
            setTasks={(newTasks) => {
              const updatedQueues = [...normalPriorityQueues];
              updatedQueues[index] = newTasks;
              setNormalPriorityQueues(updatedQueues);
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
}
