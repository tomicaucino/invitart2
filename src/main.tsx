import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './App.tsx'
import { init } from '@emailjs/browser';

init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)


