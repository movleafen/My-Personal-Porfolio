'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  MuiContainer: {
    styleOverrides: {
      disableGutters: {
        height: '100vh',
      },
    },
  },
  palette: {    
    primary: {
      main: '#01579b',
    },
    secondary: {
      main: '#0288d1',
    }
  }
});

export default theme;
