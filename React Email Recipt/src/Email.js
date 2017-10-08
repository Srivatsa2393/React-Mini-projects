import React, { Component } from 'react'; 
import Header from './Header';

class Email extends Component {
  render() {
    return (
      <div className="Email">
        <Header text="Your order" />
      </div>
    );
  }
}

export default Email;
