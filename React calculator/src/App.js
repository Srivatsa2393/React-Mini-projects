import React, { Component } from 'react';
//import logo from './logo.svg';
import Image from './Image';
import Profile from './Profile'; 
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      person: {
        name: 'Srivatsa Shankaran',
        biography: '24 year old fullstack developer living in Bremen, Germany. Originally from Bangalore, India. Love to learn and build stuff'
      },
      image: 'http://rubka.org.ua/wp-content/uploads/2015/04/2016-BMW-M8-Sport-Car.jpg',
      quote: {
        content: 'Never Ever Give Up',
        source: 'Nature'
      }
    };
  }


  render() {
    return (
      <div className="App">
        <Image src={this.state.image} />
        <Profile person={this.state.person} quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
