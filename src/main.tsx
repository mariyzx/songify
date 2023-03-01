import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import Provider from './context/Provider';
import './index.css';
import GlobalStyle from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <GlobalStyle />
      <WrappedApp />
    </Provider>
  </React.StrictMode>
);
