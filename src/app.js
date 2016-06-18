import React from 'react';
import {init, animate, onResize} from './three.js';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


// routes imports
import Main from './routes/main.js';
import Home from './routes/home.js';
import About from './routes/about.js';
import Contact from './routes/contact.js';
import Posts from './routes/posts.js';

// styles imports
import './styles/app.sass';


render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/posts" component={Posts}></Route>
    </Route>
  </Router>
), document.getElementById('main'));

init();
animate();
window.addEventListener('resize', onResize, false);
