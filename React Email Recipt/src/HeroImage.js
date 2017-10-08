import React, { Component } from 'react';

/* function HeroImage(props){
    return(
        <div className="Image" style={{ backgroundImage: 'url(' + this.url + ')'}}>
            <div className="Logo">
                TO
            </div>
        </div>
    );
} */

class HeroImage extends Component{
    render() {
        return(
            <div className="Image" style={{ backgroundImage: 'url(' + this.props.url + ')'}}>
                <div className="Logo">
                    TO
                </div>
        </div>
        );
    }
}

export default HeroImage;