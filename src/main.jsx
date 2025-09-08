import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('Main.jsx loading...');
console.log('React:', typeof StrictMode);
console.log('App component:', typeof App);

const rootElement = document.getElementById('root');
if (rootElement) {
  console.log('Root element found, creating React app');
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log('React app rendered successfully');
} else {
  console.error('Root element not found!');
}