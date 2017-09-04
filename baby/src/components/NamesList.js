import React from 'react';
import Name from './Name';

const NamesList = ({ data, filter, favourites }) => {

    const input = filter.toLowerCase();

    //gather the list of names
    const names = data
    //filtering the names from that
       
        //output a name <Name /> component from each name
        .map((person, i) => {
            return (
                <Name 
                    id={person.id}
                    key={i}
                    info={person}
                />
            )
        })

    return(
        <ul>
            {names}
        </ul>
    );
}

export default NamesList;