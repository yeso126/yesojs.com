import React from 'react';
import EasyTransition from 'react-easy-transition';
import {Link, IndexRoute} from 'react-router';

var Main = React.createClass ({
  render(){
    return (
      <div>
        <nav className="nav">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
        <EasyTransition
          path={location.pathname}
          initialStyle={{opacity: 0}}
          transition="opacity 0.3s ease-in"
          finalStyle={{opacity: 1}}
          >
          {this.props.children}
      </EasyTransition>
     </div>
    );
  }
});

export default Main;
