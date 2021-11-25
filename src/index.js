import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import { Calculator } from './Calculator';
import { reportWebVitals } from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//https://reacttraining.com/react-router/web/guides/quick-start


//https://coolors.co/f2dfd7-fef9ff-d4c1ec-9f9fed-736ced
const myTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#736ced',
    },
    secondary: {
      main: '#9F9FED',
    },
    itemContainer: 'rgba(215,218,225,1)',
    backgroundColor1: 'rgba(66,179,245,1)',
    backgroundColor2: 'rgba(95,44,130,1)',
    backgroundGradient: 'linear-gradient(rgba(66,179,245,1) 0%, rgba(95,44,130,1) 100%)',
  },
  typography: {
    fontFamily: 'Poppins, \'Lato\', sans-serif'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <Calculator />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
