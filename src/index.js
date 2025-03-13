import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot em vez de ReactDOM
import './index.css';
import App from './App';

// Crie uma raiz (root) para o aplicativo
const container = document.getElementById('root');
const root = createRoot(container);

// Renderize o componente principal (App) na raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);