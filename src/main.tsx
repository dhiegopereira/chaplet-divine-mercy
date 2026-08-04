import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@/styles/global.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Elemento #root não encontrado.');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Registro do service worker (PWA / offline).
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      /* falha silenciosa: app funciona sem SW */
    });
  });
}
