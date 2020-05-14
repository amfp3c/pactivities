import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createBrowserHistory} from 'history';

const history = createBrowserHistory()
ReactDOM.render(
  <BrowserRouter >
    <App history={history} />
  </BrowserRouter>,
  document.getElementById('root')
);
