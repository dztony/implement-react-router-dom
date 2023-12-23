import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.scss';
import StandardApp from "./StandardApp";
import HashRouterApp from "./HashRouterApp";
import BrowserRouterApp from "./BrowserRouterApp";


// ReactDOM.createRoot(document.getElementById('root')!).render(<StandardApp />);
// ReactDOM.createRoot(document.getElementById('root')!).render(<HashRouterApp />);
ReactDOM.createRoot(document.getElementById('root')!).render(<BrowserRouterApp />);
