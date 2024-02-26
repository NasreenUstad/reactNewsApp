import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NewsState from './context/NewsState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsState>
      <App />
    </NewsState>

  </React.StrictMode>,
)
