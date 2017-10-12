import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import LeaderBoard from './LeaderBoard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LeaderBoard />, document.getElementById('leaderboard'));
registerServiceWorker();
