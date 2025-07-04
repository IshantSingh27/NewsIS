import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/NewsIS"> {/* or "/My-Portfolio" if that's your repo */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
