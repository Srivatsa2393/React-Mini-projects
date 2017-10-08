import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Email from './Email';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Email />, document.getElementById('email'));
registerServiceWorker();
