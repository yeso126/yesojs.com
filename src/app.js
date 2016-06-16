import React from 'react';
import {init, animate} from './three.js';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';


// routes imports
import home from './routes/home.js';

// styles imports
import './styles/app.sass';

render((
  <Router history={browserHistory}>
    <Route path="/" component={home}></Route>
  </Router>
), document.getElementById('main'));

// init();
// animate();
