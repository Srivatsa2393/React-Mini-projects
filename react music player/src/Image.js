import React from 'react';

const Image = (props) => {
    return(
        <div className="Image" style={{ backgroundImage: 'url(' + props.src+ ')'}}>
        </div>
    );
};

export default Image;