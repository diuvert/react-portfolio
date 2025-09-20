// main.jsx
// Student name: Diuvert Lopez
// StudentID: 301487978
// Date: 2025-09-19
// Entry point for the React app

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
