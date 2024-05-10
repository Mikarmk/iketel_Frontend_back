import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProviderMenu from './ContextProviderMenu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProviderMenu>
      <App/>
    </ContextProviderMenu>
  </React.StrictMode>,
)
