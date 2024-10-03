import { Box, Stack, TextField, Button } from "@mui/material";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

class Lyric {
  constructor(content, color) {
    this.content = content;
    this.color = color;
  }
}

class Singer {
  constructor(name, color, path) {
    this.name = name;
    this.color = color;
    this.isSelected = false;
    this.path = path;
  }

  select() {
    this.isSelected = true ? !this.isSelected : this.isSelected;
  }

  unselect() {
    this.isSelected = false ? this.isSelected : !this.isSelected;
  }
}

const lyricBox = (lyrics, color) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        color: "gray",
        textAlign: "left",
        px: 2,
        py: 1,
        borderRadius: 1,
      }}
    >
      {lyrics}
    </Box>
  );
};

export default function CompleteLyrics() {
  const [activeLyrics, setActiveLyrics] = useState([]);
  const [inputLyric, setInputLyric] = useState("");
  const [activeSinger, setActiveSinger] = useState(new Singer());
  const navigate = useNavigate();

  var singerList = [
    new Singer("First Singer", "#B7E0FF", "/first"),
    new Singer("Second Singer", "#FFF5CD", "/second"),
    new Singer("Third Singer", "#FFCFB3", "/third"),
    new Singer("Fourth Singer", "#E78F81", "/fourth"),
  ];

  let handleSingerButtonOnClick = (singer) => {
    console.log('test');
  };

  let handleLyricTextInput = (e) => {
    console.log(e.target.value);
  }

  React.useEffect(() => {
    console.log('tea')
  }, [handleSingerButtonOnClick])


  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        textAlign: "center",
        color: "black",
      }}
    >
      <Stack>
        {/* Title */}
        <h1>Complete the Lyrics</h1>

        {/* Box to Group the Singers */}
        <Stack direction="row" spacing={2}>
          {singerList.map((singer, index) => (
            <Button
              sx={{
                color: "white",
                backgroundColor: singer.color,
                px: 4,
                py: 2,
                width: "14em",
              }}
              onClick={handleSingerButtonOnClick(singer)}
            >
              {singer.name}
            </Button>
          ))}
        </Stack>

        {/* Text Input */}
        <TextField
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLyricTextInput(e);
            }
          }}
          label="Enter lyrics"
          variant="outlined"
          sx={{ mt: 2 }}
        />

        {/* Box to Hold the Lyrics */}
        <Stack
          sx={{
            direction: "row",
            maxWidth: "relative",
            height: "100vh",
            boxShadow: 1,
            border: 1,
            borderColor: "white",
            borderRadius: 2,
            my: 2,
            p: 1,
          }}
        >
          {lyricBox("Test lyrics", singerList[0].color)}
          {activeLyrics.map((lyric, index) => {
            lyricBox(lyric.content, lyric.color);
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
