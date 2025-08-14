import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#e1d1c8',
      paper: '#c2a39a',
    },
    text: {
      primary: '#000',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a3007',
      paper: '#001600',
    },
    text: {
      primary: '#fff',
    },
  },
});
