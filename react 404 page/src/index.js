import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    NavLink,
    Switch,
    Redirect
  } from 'react-router-dom';

import Home from './pages/Home';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>   
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/not-found">Invalid Page</NavLink></li>
                </ul>
            </nav>

            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
