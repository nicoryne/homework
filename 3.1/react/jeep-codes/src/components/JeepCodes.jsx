import {
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const jeepCodes = [
  { key: "01A", routes: ["Alpha", "Bravo", "Charlie", "Echo", "Golf"] },
  { key: "02B", routes: ["Alpha", "Delta", "Echo", "Foxtrot", "Golf"] },
  { key: "03C", routes: ["Charlie", "Delta", "Foxtrot", "Hotel", "India"] },
  { key: "04A", routes: ["Charlie", "Delta", "Echo", "Foxtrot", "Golf"] },
  { key: "04D", routes: ["Charlie", "Echo", "Foxtrot", "Golf", "India"] },
  { key: "06B", routes: ["Delta", "Hotel", "Juliet", "Kilo", "Lima"] },
  { key: "06D", routes: ["Delta", "Foxtrot", "Golf", "India", "Kilo"] },
  { key: "10C", routes: ["Foxtrot", "Golf", "Hotel", "India", "Juliet"] },
  { key: "10H", routes: ["Foxtrot", "Hotel", "Juliet", "Lima", "November"] },
  { key: "11A", routes: ["Foxtrot", "Golf", "Kilo", "Mike", "November"] },
  { key: "11B", routes: ["Foxtrot", "Golf", "Lima", "Oscar", "Papa"] },
  { key: "20A", routes: ["India", "Juliet", "November", "Papa", "Romeo"] },
  { key: "20C", routes: ["India", "Kilo", "Lima", "Mike", "Romeo"] },
  { key: "42C", routes: ["Juliet", "Kilo", "Lima", "Mike", "Oscar"] },
  { key: "42D", routes: ["Juliet", "November", "Oscar", "Quebec", "Romeo"] },
];

const colors = [
    "#FFB3BA", // Pastel Pink
    "#FFDFBA", // Pastel Peach
    "#FFFFBA", // Pastel Yellow
    "#BAFFC9", // Pastel Green
    "#BAE1FF", // Pastel Blue
    "#D6A4A4", // Pastel Coral
    "#E2D8C3", // Pastel Beige
    "#D3B4B2", // Pastel Rose
    "#C3C3E6", // Pastel Lavender
    "#C5E1A5", // Pastel Lime
  ];
  

export default function JeepCodes() {
  // Color index to keep track of current color in list
  let colorIndex = 0;

  // START OF USE STATES
  let [userJeepCodes, setUserJeepCodes] = useState([]);
  let [colorMap, setColorMap] = useState({});
  // END OF USE STATES

  // START OF INPUT HANDLER
  const handleJeepCodeInput = (e) => {
    let tempJeepCode = [];
    e.forEach((jeepCode) => {
      const matchingJeep = jeepCodes.find((j) => j.key === jeepCode.trim());
      if (matchingJeep) {
        tempJeepCode.push(matchingJeep);
      }
    });

    setUserJeepCodes(tempJeepCode);
    setColorMap({});
  };
  //END OF INPUT HANDLER

  // Function to get the color of matching routes
  const getRouteColor = (route, currentIndex, colorIndex) => {
    if (colorMap[route]) {
      return colorMap[route];
    }

    for (let i = 0; i < userJeepCodes.length; i++) {
        const jeep = userJeepCodes[i];
        if (jeep.routes.includes(route)) {
          const colorToUse = colors[colorIndex % colors.length];
          setColorMap((prevMap) => ({
            ...prevMap,
            [route]: colorToUse,
          }));
          return colorToUse;
        }
      }
      

    return "inherit"; // inherit makes the text color default
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "80vh",
        padding: 2,
      }}
    >
      <TextField
        id="input-jeep-code"
        label="Input Jeep Codes"
        variant="outlined"
        onChange={(e) => handleJeepCodeInput(e.target.value.split(","))}
        sx={{ marginBottom: 2 }}
      />

      <List>
        {userJeepCodes.map((jeep, jeepIndex) => (
          <ListItem key={jeep.key}>
            <ListItemText
              primary={`Jeep Code: ${jeep.key}`}
              secondary={jeep.routes.map((route, routeIndex) => {
                const color = getRouteColor(route, jeepIndex, colorIndex);

                if (color !== "inherit") {
                  colorIndex++;
                }

                return (
                  <Typography
                    key={routeIndex}
                    component="span"
                    sx={{
                      color: color,
                    }}
                  >
                    {route}
                    {routeIndex !== jeep.routes.length - 1 ? ", " : ""}
                  </Typography>
                );
              })}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
