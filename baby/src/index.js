import React from 'react';
import ReactDOM from 'react-dom';
import data from './data/data';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ('normalize.css');


ReactDOM.render(<App data={data}/>, document.getElementById('root'));
registerServiceWorker();
