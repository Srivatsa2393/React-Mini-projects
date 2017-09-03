import React, { Component } from 'react';
import Information from './Workspace/Information';
import Meta from './Workspace/Meta';

class ImagePreview extends Component{
    render() {
        return(
            <div className="ImagePreview" style={{'backgroundImage': 'url('+ this.props.image +')'}}>
                <div className="WorkspaceOverview">
                    <Information name="Coworking Space, South Korea" price={this.props.price} duration="1" /> 
                    <Meta people={this.props.people} />  
                </div>
            </div>
        );  
    }
}

export default ImagePreview;