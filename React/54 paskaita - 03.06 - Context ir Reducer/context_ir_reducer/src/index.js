import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TableGamesProvider } from './contexts/TableGamesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TableGamesProvider>
    <App />
  </TableGamesProvider>
);