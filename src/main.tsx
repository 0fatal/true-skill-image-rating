import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'

const root = document.getElementById('root')

render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  root
)
