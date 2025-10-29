import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Basic runtime diagnostics to surface silent errors in production
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error || e.message || e);
});
window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason || e);
});

console.log('Rendering React App...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element #root not found');
} else {
  try {
    createRoot(rootElement).render(<App />);
    console.log('React App rendered.');
  } catch (err) {
    console.error('Failed to render React App:', err);
  }
}
