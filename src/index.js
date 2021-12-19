import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProveedorTema } from "./Context/CartContext"

ReactDOM.render(
  <ProveedorTema>
    <App />
  </ProveedorTema>,
  document.getElementById('root')
);

reportWebVitals();