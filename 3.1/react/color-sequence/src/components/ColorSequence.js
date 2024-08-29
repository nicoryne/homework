import * as React from 'react';
import Box from '@mui/material/Box';
import {colors} from '../constants/colors'

/**
 *  Linear grid with boxes that signify color sequence
 * 
 * @returns {component}
 */

export default function ColorSequence() {
    return (
        <Box display="flex" mt={15} mb={4}>
            {colors.map((color, index) => (
                <Box key={index} bgcolor={color} width={50} height={50} />
            ))}
        </Box>
    );
}