import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import Provider from './context/Provider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <WrappedApp />
    </Provider>
  </React.StrictMode>
);
