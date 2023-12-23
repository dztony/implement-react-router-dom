import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.scss';
import StandardApp from "./StandardApp";
import App from "./App";


// ReactDOM.createRoot(document.getElementById('root')!).render(<StandardApp />);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
);
