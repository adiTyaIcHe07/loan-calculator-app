import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiButton: {

      styleOverrides: {
        root: {
          textTransform: 'none', 
        },
      },
    },

    MuiTextField: {
        defaultProps: {
            variant: 'outlined',
            margin: 'normal',
        }
    }
  },
};







export const lightTheme = createTheme({
  palette: {

    mode: 'light',
    primary: {
      main: '#1976d2', 
    },
    
    secondary: {
      main: '#dc004e', 
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', 
    },
    secondary: {
      main: '#f48fb1', 
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e', 
    },
    text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
    }
  },
  ...commonSettings,
});