import React from 'react';

function Image(props){
    return(
        <div className="Image" style={{backgroundImage: 'url(' + props.image + ')'}}>

        </div>
    );
}

export default Image;