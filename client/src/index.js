import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.css';
import App from './App';
import { AppProvider } from './context/appContext';


// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
