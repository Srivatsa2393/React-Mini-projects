import React from 'react';
import Name from './Name';

const NamesList = ({ data, filter, favourites, addFavourites }) => {

    const input = filter.toLowerCase();

    //gather the list of names
    const names = data
    //filtering the names from that
        .filter((person, i) => {
            return (
                //already favorite and not matching the current search value
                favourites.indexOf(person.id) === -1 && !person.name.toLowerCase().indexOf(input)
            )
        })
        //output a name <Name /> component from each name
        .map((person, i) => {
            return (
                <Name 
                    id={person.id}
                    key={i}
                    info={person}
                    handleFavourites={(id) => addFavourites(id)}
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