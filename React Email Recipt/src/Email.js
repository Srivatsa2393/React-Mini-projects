import React, { Component } from 'react'; 
import Header from './Header';
import HeroImage from './HeroImage';
import Content from './Content';

class Email extends Component {
  render() {
    return (
      <div className="Email">
        <Header text="Your order" />
        <HeroImage url="http://static1.squarespace.com/static/55acc005e4b098e615cd80e2/5777cee5b8a79b6f0197ecba/57ae12a7e6f2e1c9bc4787d0/1471025851733/IMG_5246.jpg?format=2500w"/>
        <Content 
          title="Thanks for ordering a print!"
          body="It's super cool that you bought something from me, and you love my work, thanks! :) I usually dispatch orders within 7 days of purchase, so you'll have a nice shiny new print soon."
        />
      </div>
    );
  }
}

export default Email;
