import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'))