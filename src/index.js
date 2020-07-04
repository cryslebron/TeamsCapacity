import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { loadState, saveState } from './localStorage';
import {BrowserRouter as Router} from 'react-router-dom';




ReactDOM.render( <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>, document.getElementById('root'))