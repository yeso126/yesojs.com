import React from 'react';
import {Link, IndexRoute} from 'react-router';

var Appbar = React.createClass ({
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
        {this.props.children}
     </div>
    );
  }
});

export default Appbar;
