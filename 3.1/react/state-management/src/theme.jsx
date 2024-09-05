import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f4f6f8',
    },
    error: {
      main: '#ff1744',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#333333',
    },
    h4: {
      fontWeight: 700,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      color: '#666666',
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8, 
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '16px',
          boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
        },
      },
    },
  },
});

export default theme;
