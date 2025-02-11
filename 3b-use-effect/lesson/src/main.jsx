import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
// Quickly toggle between components by changing the file name (without file extension) in the quote marks below
import App from './Posts';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
