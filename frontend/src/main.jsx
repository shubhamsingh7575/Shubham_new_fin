import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import HomePage from './landing_pages/home/HomePage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <HomePage />
    
  </StrictMode>,
)
