import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// not using React.StrictMode here so useEffect doesnt fire twice and confuse me while testing
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
