/**
 * This file is the entry point of the React application.
 * It imports the necessary modules and components, including React, ReactDOM, the GlobalStore and the App component.
 * It then uses ReactDOM to render the App component into the root element of the HTML document.
 * The App component is wrapped in the GlobalStoreProvider to provide it with access to the global state.
 *
 * @module main
 * @requires react
 * @requires react-dom/client
 * @requires ./store/GlobalStore.jsx
 * @requires ./App.jsx
 */

// Importing the necessary modules and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import {GlobalStore, GlobalStoreProvider} from "./store/GlobalStore.jsx";
import App from './App.jsx';

/**
 * Rendering the App component into the root element of the HTML document.
 * The App component is wrapped in the GlobalStoreProvider to provide it with access to the global state.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalStoreProvider store={GlobalStore}>
          <App />
      </GlobalStoreProvider>
  </React.StrictMode>,
)