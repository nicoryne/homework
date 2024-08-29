import * as React from "react";
import Box from "@mui/material/Box";

/**
 *  Linear grid with colored boxes that showcases the color sequence
 *
 * @returns {React.Component}
 */

export default function ColorSequence({ colors }) {
  return (
    <Box display="flex" mt={15} mb={4}>
      {colors.map((color, index) => (
        <Box
          key={index}
          bgcolor={color}
          width={{ xs: 30, md: 40, xl: 50 }}
          height={{ xs: 30, md: 40, xl: 50 }}
        />
      ))}
    </Box>
  );
}
