import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Modal from './Modal';
import './index.css';

class App extends Component {
 constructor(props){
   super(props);

   this.state = {
     mounted: false
   };

   this.handleSubmit = this.handleSubmit.bind(this);
 }

  handleSubmit(event){
    event.preventDefault();
    this.setState({ mounted: false });
  }

  componentDidMount(){
    return (
      this.setState({ mounted: true })
    )
  }


  render() {
    let items;
    if (this.state.mounted) {
      items = (
        <Modal onSubmit={this.handleSubmit} />
      );
    }
    return (
      <div className="App">
        <CSSTransitionGroup 
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
