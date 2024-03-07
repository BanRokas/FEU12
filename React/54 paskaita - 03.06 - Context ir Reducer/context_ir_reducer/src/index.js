import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TableGamesProvider } from './contexts/TableGamesContext';
import { FormInputsProvider } from './contexts/FormInputsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TableGamesProvider>
    <FormInputsProvider>
      <App />
    </FormInputsProvider>
  </TableGamesProvider>
);