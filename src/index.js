import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = ReactDOM.createRoot(document.getElementById('root'));
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/checklist-test/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
