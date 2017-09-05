import React from 'react';

//This component renders the name of one single baby

const Name = ({ id, info, handleFavourites }) => {
    return(
        <li 
            className={info.sex}
            onClick={() => handleFavourites(id)}
        >
            {info.name}
        </li>
    );
}

export default Name;