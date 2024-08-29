import * as React from "react";
import "./styles/App.css";
import ButtonPanel from "./components/ButtonPanel";
import ColorSequence from "./components/ColorSequence";
import initialColors from "./constants/colors" 

function App() {
  const [colors, setColors] = React.useState(initialColors);

  return (
    <>
      <ColorSequence colors={colors}/>

      <ButtonPanel colors={colors} setColors={setColors}/>
    </>
  );
}

export default App;
