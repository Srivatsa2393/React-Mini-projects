import React from 'react';

const Information = (props) => {

    var duration = pluralize('day', parseInt(props.duration));
    return(
        <div className="WorkspaceInformation">
            <div className="WorkspaceName">
                {props.name}
            </div>

            <div className="WorkspacePrice">
                <div className="Price">{props.price} GBP</div>
                <div className="Duration">/ {duration} </div>
            </div>
        </div>
    );
}

export default Information;