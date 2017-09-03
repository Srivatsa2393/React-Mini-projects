import React from 'react';

const Meta = (props) => {
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