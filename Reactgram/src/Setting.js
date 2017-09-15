import React from 'react';

function Setting(props){
    return(
        <div className="Setting">
            <label>
                <div>{props.name}</div>
                <div>{props.value}</div>
            </label>

            <input 
                min={props.min} 
                max={props.max} 
                step="1" 
                onChange={props.onChange}
                id={props.name}
                type="range"
                value={props.value}
            />
        </div>
    );
}

Setting.propType = {
    name: React.PropTypes.string,
    value: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    onChange: React.PropTypes.func
};

export default Setting;