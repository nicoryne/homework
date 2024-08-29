import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import { Button } from '@mui/material';


const theme = {
    color: {
      default: "#36546e",
      hover: "#699cc9",
    }
  }
  
const Item = styled(Button)({
    backgroundColor: theme.color.default,
    ":hover": {
      backgroundColor: theme.color.hover,
      boxShadow: "0px 3px 40px rgba(0, 0, 0, 0.3)"
    },
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    height: 120,
    width: "100%",
    borderRadius: 6
});

export default function MyButton() {
    React.useState
    return (
        <Item></Item>
    );
}
