import React, { Component } from 'react';
import Image from './Image';
import Buttons from './Buttons';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      data: {
        title: 'ReactJS Social Share',
        author: 'Srivatsa',
        image: 'https://www.mercedes-benz.com/wp-content/uploads/sites/3/2016/06/01_Mercedes-Benz-Vehicles-AMG-GT-R-1280x686-1280x686.jpg?format=750w',
        url: 'https://github.com/Srivatsa2393',
        share: [
            {
                type: 'facebook',
                count: 43,
                url: 'https://www.facebook.com/sharer/sharer.php?s=100&p[url]=https://github.com/Srivatsa2393'
            },
            {
                type: 'twitter',
                count: 7,
                url: 'https://twitter.com/intent/tweet?hashtags=react,ui,dev&text=ReactJS%20Daily%20UI%20on%20Codepen&tw_p=tweetbutton&url=https://github.com/Srivatsa2393'
            }
        ]
      }
    };
  }


  render() {
    return (
      <div className="App">
        <Image 
          title={this.state.data.title} 
          author={this.state.data.author}
          image={this.state.data.image}
        />
        <Buttons data={this.state.data} />
      </div>
    );
  }
}

export default App;
