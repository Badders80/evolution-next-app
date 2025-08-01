import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Buffer polyfill for browser compatibility
if (typeof global === 'undefined') {
  (window as any).global = globalThis;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
