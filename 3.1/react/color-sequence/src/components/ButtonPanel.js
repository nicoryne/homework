import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import MyButton from "./MyButton";
import colors from "../constants/colors";
import { shuffleArray } from "../utils/arrayUtils"

/**
 *
 *
 * @returns {React.Component}
 */

export default function ButtonPanel() {
  const [userSequence, setUserSequence] = React.useState([]);
  const [buttonColors, setButtonColors] = React.useState([]);
  const [pressedButtons, setPressedButtons] = React.useState({});

  React.useEffect(() => {
    const colorIndices = Array.from(
      { length: colors.length },
      (_, index) => index % colors.length
    );
 
    setButtonColors(shuffleArray(colorIndices));
  }, []);

  React.useEffect(() => {
    if (Object.keys(pressedButtons).length === buttonColors.length) {
      winGame();
    }
  }, [pressedButtons, buttonColors]);

  const handleButtonClick = (index) => {
    if(pressedButtons[index] == true) return;

    setPressedButtons((prev) => ({ ...prev, [index]: true}))

    const lastIndex = userSequence.length === 0 ? -1 : userSequence[userSequence.length - 1];
    if (lastIndex === undefined || index === lastIndex + 1) {
      setUserSequence((prevSequence) => [...prevSequence, index]);
    } else {
      resetGame();
    }
  };

  const resetGame = () => {
    setUserSequence([]);
    setPressedButtons({});
  };

  const winGame = () => {
    const colorIndices = Array.from(
      { length: 9 },
      (_, index) => index % colors.length
    );
    setButtonColors(shuffleArray(colorIndices));
    resetGame();
  }

  return (
    <Box display="flex" justifyContent="center" width="100vw">
      <Grid container spacing={{ xs: 1, md: 2 }} size={8}>
        {buttonColors.map((colorIndex, i) => (
          <Grid item size={4} key={i}>
            <MyButton
              colorIndex={colorIndex}
              onClick={() => handleButtonClick(colorIndex)}
              pressed={pressedButtons[colorIndex]}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
