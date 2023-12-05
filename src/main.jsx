import React from 'react'
import ReactDOM from 'react-dom/client'
import Parse from 'parse/dist/parse.min.js'

import App from './App.jsx'

import './styles.css'

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'mZaBGRgdnv1BxrxSvcT1Ikz9pi8mofGkA0bdtdKp'
const PARSE_HOST_URL = 'https://parseapi.back4app.com/'
const PARSE_JAVASCRIPT_KEY = 'ZumY4b5amLp2zKz7U0Caxg51pNUaX3WWpGfhdLL5'

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY)
Parse.serverURL = PARSE_HOST_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
