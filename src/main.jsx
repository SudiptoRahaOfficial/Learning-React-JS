import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// importing components here
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)