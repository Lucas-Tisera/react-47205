import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TemaProvider } from './Context/TemaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TemaProvider>
      <App />
    </TemaProvider>
  </React.StrictMode>
);
