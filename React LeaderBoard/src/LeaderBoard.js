import React, { Component } from 'react';
import Title from './Title';
import List from './List';
import './App.css';

class LeaderBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Leaderboard',
      people: [
        {
          name: 'John Hancock',
          image: 'http://lorempixel.com/100/100',
          score: 2000
        },
        {
          name: 'Sebastian Lofgren',
          image: 'http://lorempixel.com/120/120',
          score: 2050
        },
        {
          name: 'Donald Trump',
          image: 'http://lorempixel.com/110/110',
          score: 51
        },
        {
          name: 'Bill Hader',
          image: 'http://lorempixel.com/105/105',
          score: 2103
        },
        {
          name: 'Salvador Dali',
          image: 'http://lorempixel.com/101/101',
          score: 2019
        }
      ]
    };
  }

  render() {
    return (
      <div className="LeaderBoard">
        <Title title={this.state.title} />
        <List people={this.state.people} />
      </div>
    );
  }
}

export default LeaderBoard;
