import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UsersFormInputsProvider } from './contexts/UsersFormInputsContext';
import { UsersProvider } from './contexts/UsersContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsersFormInputsProvider>
    <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersProvider>
  </UsersFormInputsProvider>
);