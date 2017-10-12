import React, { Component } from 'react';

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
            return <Person />
        })

        
        return(
            <ul>

            </ul>
        );
    }
}

export default List;