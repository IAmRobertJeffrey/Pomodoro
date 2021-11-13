import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import GlobalFonts from './fonts/fonts';

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


