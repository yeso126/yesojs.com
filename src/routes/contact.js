import React  from 'react';
import email from '../secrets.js';
import axios from 'axios';


class contact extends React.Component{
  constructor() {
    super();
    this.state= {
      from: '',
      message: ''
    };
}

submit (e) {
  e.preventDefault();
  axios({
    url: 'https://formspree.io/yesox126@gmail.com',
    method: 'POST',
    data: {
      from: this.state.from,
      message: this.state.message
    },
    dataType: 'json'
  });
  alert('Mensaje enviado, me pondre en contacto prontamente');
}

handleChangeFrom(e){
 this.setState({from: e.target.value});
}

handleChangeMessage(e){
 this.setState({message: e.target.value});
}
  render () {
    return(
      <div className="page-container">
        <div className="container">
          <h1 className="title">Contact</h1>
          <div>
              <label>Email</label>
              <input  type="email"
                      required="required"
                      value={this.state.from}
                      onChange={this.handleChangeFrom.bind(this)}
                />

              <label>Text</label>
              <input  type="text"
                      required="required"
                      value={this.state.message}
                      onChange={this.handleChangeMessage.bind(this)}/>
              <button onClick={this.submit.bind(this)}type="submit">Send</button>
          </div>
        </div>
      </div>
    );
  };
};

export default contact;
