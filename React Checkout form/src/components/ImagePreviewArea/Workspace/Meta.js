import React from 'react';
import pluralize from 'pluralize';

const Meta = (props) => {
    
    var people = pluralize('person', props.people);

    return(
        <div className="WorkspaceMeta">
            <div className="Description">
                Entire office for <strong>{people}</strong>
            </div>

            <div className="Dates">
                <strong>Mon, Aug 22, 2017</strong> to <strong>Fri, Aug 29, 2017</strong>
            </div>

        </div>
    );
}

export default Meta; 