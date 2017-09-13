import React from 'react';

function Setting(props){
    return(
        <div className="Setting">
            <label>
                <div>{props.name}</div>
                <div>{props.value}</div>
            </label>
        </div>
    );
}

export default Setting;