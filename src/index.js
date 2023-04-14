import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: '#212121',
    accent: 'red',
    online: 'green',
  },
  radii: {
    xs: '5px',
    s: '10px',
    l: '15px',
    xl: '20px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
