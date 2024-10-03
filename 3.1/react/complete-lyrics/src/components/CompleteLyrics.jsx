import { Box, Stack, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

class Lyric {
  constructor(content, singer, index) {
    this.content = content;
    this.singer = singer;
    this.index = index;
  }
}

class Singer {
  constructor(name, bgcolor, color, path) {
    this.name = name;
    this.bgcolor = bgcolor;
    this.color = color;
    this.path = path;
  }
}

export default function CompleteLyrics() {
  const [activeLyrics, setActiveLyrics] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [activeSinger, setActiveSinger] = useState(undefined);
  const [textInputHidden, setTextInputHidden] = useState("none");
  const navigate = useNavigate();

  var singerList = [
    new Singer("First Singer", "#B7E0FF", "#5391CD", "/first"),
    new Singer("Second Singer", "#FFF5CD", "#D1B55A", "/second"),
    new Singer("Third Singer", "#FFCFB3", "#D19773", "/third"),
    new Singer("Fourth Singer", "#E78F81", "#C16455", "/fourth"),
  ];

  const deleteLyric = (index) => {
    if (index < -1) {
      return;
    }

    setActiveLyrics((activeLyrics) =>
      activeLyrics.filter((s, i) => i !== index)
    );
  };

  const lyricBox = (lyrics, singer, index) => {
    return (
      <Box
        key={index}
        sx={{
          backgroundColor: singer.bgcolor,
          color: singer.color,
          textAlign: "left",
          overflow: "auto",
          maxWidth: "43em",
          px: 4,
          py: 2,
          borderRadius: 1,
          borderLeft: `5px solid ${singer.color}`,
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {lyrics}
        <Button onClick={() => deleteLyric(index)} sx={{ fontWeight: "bold", color: singer.color}}>
          X
        </Button>
      </Box>
    );
  };

  let handleLyricTextInput = () => {
    if (activeSinger === undefined) {
      return;
    }

    if (textInput === "") {
      return;
    }

    let newLyric = new Lyric(textInput, activeSinger);
    setActiveLyrics((prevLyrics) => [...prevLyrics, newLyric]);
    setTextInput("");
  };

  useEffect(() => {
    if (activeSinger === undefined) {
      return;
    }

    setTextInputHidden("flex");
    navigate(`/singer${activeSinger.path}`);
  }, [activeSinger, navigate, setTextInputHidden]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        backgroundColor: "#121212",
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
                backgroundColor: singer.bgcolor,
                color: singer.color,
                px: 4,
                py: 2,
                width: "14em",
                fontWeight: "bold",
              }}
              onClick={() => setActiveSinger(singer)}
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
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
          label="Enter lyrics"
          variant="outlined"
          sx={{
            display: textInputHidden,
            mt: 2,
            input: { color: "#E0E0E0" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#1E1E1E",
              },
              "&:hover fieldset": {
                borderColor: "#E0E0E0",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#E0E0E0",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#E0E0E0",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#E0E0E0",
            },
          }}
        />

        {/* Box to Hold the Lyrics */}
        <Stack
          sx={{
            direction: "row",
            maxWidth: "relative",
            height: "100%",
            boxShadow: 4,
            border: 1,
            borderColor: "transparent",
            backgroundColor: "#1E1E1E",
            borderRadius: 2,
            my: 2,
            p: 4,
          }}
          spacing={2}
        >
          {activeLyrics.map((lyric, index) => {
            return lyricBox(lyric.content, lyric.singer, index);
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
