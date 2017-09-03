import React, { Component } from 'react';
import './App.css';
import Overlay from './components/Overlay';
import Container from './components/Container';
import { CSSTransitionGroup } from 'react-transition-group';
import ImagePreview from './components/ImagePreviewArea/ImagePreview';
import Checkout from './components/CheckoutArea/Checkout';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mounted: false,
      people: 1,
      price: 320.00,
      tax: 20,
      duration: 5,
      discount: 5
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('handled ajax submission here');
  }


  render() {
    var overlay, container;

    if(this.state.mounted){
      overlay = (
        <Overlay img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg"/>
      );

      container = (
        <Container>
          <ImagePreview 
            price={this.state.price} 
            duration={this.state.duration}
            people={this.state.people}
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg"
          />

          <Checkout 
            duration={this.state.duration}
            discount={this.state.discount}
            tax={this.state.tax}
            price={this.state.price}
            onSubmit={this.handleSubmit}
          />

        </Container>
      );
    }
    return (
      <div className="App">
        <CSSTransitionGroup transitionName="overlay" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {overlay}
        </CSSTransitionGroup>

        <CSSTransitionGroup transitionName="container" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {container}
        </CSSTransitionGroup>


      </div>
    );
  }
}

export default App;
