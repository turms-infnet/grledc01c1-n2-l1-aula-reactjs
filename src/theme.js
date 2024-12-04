import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#4d9d9a',
      main: '#218581',
      dark: '#175d5a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#337a77',
      main: '#005955',
      dark: '#003e3b',
      contrastText: '#000',
    }
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export {
    lightTheme,
    darkTheme
}