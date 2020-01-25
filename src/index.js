import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
