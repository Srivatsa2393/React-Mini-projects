import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Switch from './Switch';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Switch />, document.getElementById('switch'));
registerServiceWorker();
