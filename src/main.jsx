import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// npm install react-bootstrap bootstrap > include following line at main/app.jsx
// import 'bootstrap/dist/css/bootstrap.min.css'

// importing components here
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)