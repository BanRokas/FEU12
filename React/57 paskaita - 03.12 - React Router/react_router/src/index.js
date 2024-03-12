import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UsersFormInputsProvider } from './contexts/UsersFormInputsContext';
import { UsersProvider } from './contexts/UsersContext';
import { MerchandiseProvider } from './contexts/MerchandiseContext';
import { BrowserRouter } from 'react-router-dom';
import { MerchandiseFormInputsProvider } from './contexts/MerchandiseFormInputsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsersFormInputsProvider>
    <UsersProvider>
      <MerchandiseProvider>
        <MerchandiseFormInputsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MerchandiseFormInputsProvider>
      </MerchandiseProvider>
    </UsersProvider>
  </UsersFormInputsProvider>
);