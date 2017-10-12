import React, { Component } from 'react';

class ChartBlock extends Component{
    render() {
        return(
            <div className="ChartBlock" style={{ height: this.props.value }}>
            </div>
        );  
    }
}

export default ChartBlock;