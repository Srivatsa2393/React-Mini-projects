import React, { Component } from 'react';
import Person from './Person';

class List extends Component{
    sortArray(){
        return this.props.people.sort(this.compareArray);
    }

    compareArray(a,b){
        if(a.score < b.score){
            return 1;
        }else if(a.score > b.score){
            return -1;
        }else{
            return 0;
        }
    }

    render() {
        let peopleList = this.sortArray();

        let people = peopleList.map((person, i) => {
            return <Person key= {i} name={person.name} image={person.image} score={person.score}/>
        })

        
        return(
            <ul>
                {people}
            </ul>
        );
    }
}

export default List;