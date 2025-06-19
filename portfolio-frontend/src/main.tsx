import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
<div className="min-h-screen w-full max-w-screen bg-white dark:bg-[#0f172a]">

        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
