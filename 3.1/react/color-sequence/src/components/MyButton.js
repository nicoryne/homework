import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import colors from "../constants/colors";

const theme = {
  color: {
    default: "#36546e",
    hover: "#699cc9",
  },
};

const Item = styled(Button)(({ bgColor }) => ({
  backgroundColor: bgColor,
  ":hover": {
    boxShadow: "0px 3px 40px rgba(0, 0, 0, 0.3)",
    backgroundColor: theme.color.hover
  },
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  height: 120,
  width: "100%",
  borderRadius: 6,
}));

export default function MyButton({ colorIndex, onClick, pressed }) {
  const currentColor = pressed ? colors[colorIndex] : theme.color.default;

  return <Item onClick={onClick} bgColor={currentColor} />;
}
