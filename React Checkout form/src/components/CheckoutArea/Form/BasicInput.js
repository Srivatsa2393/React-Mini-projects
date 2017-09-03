import React from 'react';

const BasicInput = (props) => {
    return (
        <div className="BasicInput">
            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.name} type={props.type} placeholder={props.placeholder} />
        </div>
    );  
}

export default BasicInput;