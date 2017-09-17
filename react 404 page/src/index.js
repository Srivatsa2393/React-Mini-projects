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
import About from './pages/About';
import NotFound from './pages/NotFound/NotFound';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>   
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about-us">You will be redirected</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/not-found">Invalid Page</NavLink></li>
                </ul>
            </nav>

            <Switch>
                <Route path="/" exact component={Home} />
                <Redirect from="/about-us" to="/about" />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
