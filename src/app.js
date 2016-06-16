import React from 'react';
import {init, animate} from './three.js';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';


// routes imports
import home from './routes/home.js';
import about from './routes/about.js';

// styles imports
import './styles/app.sass';

render((
  <Router history={hashHistory}>
    <Route path="/" component={home}></Route>
    <Route path="/about" component={about}></Route>
  </Router>
), document.getElementById('main'));

init();
animate();
