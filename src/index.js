import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import storeFactory from "./Store.js";
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";

const store = storeFactory();

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);