import React, { Component } from 'react';
import Name from './Name';

//refactoring it to functional component
const ShortList = ({ favourites, data }) => {

    const hasFavourites = (favourites.length > 0);
    const favList = favourites.map((fav, i) => {
        return(
            <Name 
                id={i}
                key={i}
                info={data[fav]}
            />
        );
    });
    
    return(
        <div className="favourites">
            <h4>
                {hasFavourites ? 'Your Shortlist': 'Click on a name to shortlist it..'}
            </h4>
            <ul>
                {favList}
            </ul>
            {hasFavourites && <hr/>}
        </div>
    );
};

export default ShortList;