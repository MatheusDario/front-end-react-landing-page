import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App/App.tsx';
import { GlobalStyles } from './styles/global-styles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
);
