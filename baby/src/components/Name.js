import React from 'react';

//This component renders the name of one single baby

const Name = ({ id, info }) => {
    return(
        <li className={info.sex}>
            {info.name}
        </li>
    );
}

export default Name;