import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function TaskBox({ priority, duration }) {
  const theme = useTheme();

  const isHighPriority = priority === "high";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 34,
        height: 34,
        borderRadius: 2,
        backgroundColor: "transparent",
        border: isHighPriority
            ? `2px solid ${theme.palette.error.dark}`
            : `1px solid ${theme.palette.grey[500]}`,
      }}
    >
      <Typography color="white">{duration}</Typography>
    </Box>
  );
}
