import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './Product';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Product />, document.getElementById('product'));
registerServiceWorker();
