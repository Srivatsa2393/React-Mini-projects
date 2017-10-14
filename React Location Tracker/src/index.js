import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Location from './Location';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Location />, document.getElementById('app'));
registerServiceWorker();
