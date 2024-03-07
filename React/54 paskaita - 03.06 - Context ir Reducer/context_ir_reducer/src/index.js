import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TableGamesProvider } from './contexts/TableGamesContext';
import { FormInputsProvider } from './contexts/FormInputsContext';
import { PageLoaderProvider } from './contexts/PageLoaderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TableGamesProvider>
    <FormInputsProvider>
      <PageLoaderProvider>
        <App />
      </PageLoaderProvider>
    </FormInputsProvider>
  </TableGamesProvider>
);