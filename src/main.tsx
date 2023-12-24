import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.scss';
import HashRouterApp from "./App/HashRouterApp";
import BrowserRouterApp from "./App/BrowserRouterApp";


// ReactDOM.createRoot(document.getElementById('root')!).render(<HashRouterApp />);
ReactDOM.createRoot(document.getElementById('root')!).render(<BrowserRouterApp />);
