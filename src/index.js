import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: '#212121',
    bcgBlue: '#00bfffe9',
    accent: 'red',
    online: 'green',
    bcgGrey: 'grey',
    grey: '#b7bbbbea',
    lightGrey: '#ffffffe7',
    paleBlue: 'rgba(62, 200, 207, 0.929);',
  },
  radii: {
    xs: '5px',
    s: '10px',
    l: '15px',
    xl: '20px',
  },

  boxShadow: {
    shadowMain: '0px 0px 12px -2px rgba(0, 0, 0, 0.75)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
