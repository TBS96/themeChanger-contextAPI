import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Workbox } from 'workbox-window';
import './index.css';

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');
    
    wb.register().then((registration) => {
      if (registration.installing) {
        console.log('Service worker is installing...');
      } else if (registration.waiting) {
        console.log('Service worker is waiting...');
      } else if (registration.active) {
        console.log('Service worker is active!');
      }
    }).catch(error => {
      console.error('Service worker registration failed:', error);
    });
  }
};

registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
