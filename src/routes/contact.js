import React from 'react';
import email from '../secrets.js';
import axios from 'axios';

class contact extends React.Component{
  constructor() {
    super();
    this.state= {
      data: []
    };
}
submit (e,email) {
  e.preventDefault();
  axios({
    url: 'https://formspree.io/yeso126@hotmail.com',
    method: 'POST',
    data: {message: 'hello!'},
    dataType: 'json'
  });
}
  render () {
    return(
      <div className="page-container">
        <div className="container">
          <h1 className="title">Contact</h1>
          <form>
              <input type="text"/>
              <input type="email"/>
              <button onClick={this.submit}>Send</button>
          </form>
        </div>
      </div>
    );
  };
};

export default contact;
