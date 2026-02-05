import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

/**/ 
/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/frontend-v9-finalproject-x5/'>
      <App />
    </BrowserRouter>
  </StrictMode>,
)






