import React, { Component } from 'react';
import Information from './Information';
import Meta from './Meta';

class WorkSpace extends Component{
    render() {
        return(
            <div>
                <Information />
                <Meta />
            </div>
        )
    }
}

export default WorkSpace;