import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import React from "react";

const ColoredBox = styled(Box)(({ color, isHighlight }) => ({
  bgcolor: color,
  opacity: isHighlight ? 0.2 : 1,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  borderRadius: 2,
}));

export default function MidPrac() {

  // START OF USE STATES
  const [colors, setColors] = React.useState([
    { color: "#ffadad", value: 0, isHighlight: false }, // pastel red
    { color: "#ffd6a5", value: 0, isHighlight: false }, // pastel orange
    { color: "#fdffb6", value: 0, isHighlight: false }, // pastel yellow
    { color: "#caffbf", value: 0, isHighlight: false }, // pastel green
    { color: "#9bf6ff", value: 0, isHighlight: false }, // baby blue
    { color: "#a0c4ff", value: 0, isHighlight: false }, // pastel blue
    { color: "#bdb2ff", value: 0, isHighlight: false }, // pastel purple
    { color: "#ffc6ff", value: 0, isHighlight: false }, // pastel pink
    { color: "#ff9ed7", value: 0, isHighlight: false }, // pink
  ]);

  const [isLive, setLive] = React.useState(false);

  const [lastHighlightedIndex, setLastHighlightedIndex] = React.useState(null);

  // END OF USE STATES

  // START OF USE EFFECTS
  React.useEffect(() => {
    let interval;
    if (isLive) {
      interval = setInterval(() => {
        const newIndex = Math.floor(Math.random() * colors.length);
        setLastHighlightedIndex(newIndex); 
        const newColors = colors.map((color, index) => ({
          ...color,
          isHighlight: index === newIndex,
        }));
        setColors(newColors);
      }, 100);
    } else {
      if (lastHighlightedIndex !== null) {
        setColors(colors.map((color, index) => ({
          ...color,
          value: index === lastHighlightedIndex ? color.value + 1 : color.value,
        })));
    }
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isLive]);

  // END OF USE EFFECTS

  // START OF FUNCTIONS
  const handleButtonClick = () => {
    setLive(!isLive);
  };
  // END OF FUNCTIONS

  return (
    <>
      {/* Color Sequence with Counter */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 15, mb: 4 }}>
        {colors.map(({ color, value }, index) => (
          <Box
            key={index}
            bgcolor={color}
            width={{ xs: 30, md: 40, xl: 50 }}
            height={{ xs: 30, md: 40, xl: 50 }}
            color={"gray"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {value}
          </Box>
        ))}
      </Box>

      {/* 3x3 Grid with Color Boxes */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2} size={{xs: 10, sm: 6, md: 4}}>
          {colors.map(({ color, isHighlight }, index) => (
            <Grid item size={4} key={index}>
              <ColoredBox
                width={"100%"}
                height={120}
                bgcolor={color}
                isHighlight={isHighlight}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
        <Button
          sx={{ bgcolor: "black", color: "white", width: 120 }}
          onClick={handleButtonClick}
        >
          {isLive ? "Stop" : "Start"}
        </Button>
      </Box>
    </>
  );
}
