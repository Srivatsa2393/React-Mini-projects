import React, { Component } from 'react';
import ChartBlock from './ChartBlock';

class ChartItem extends Component{
    render() {
        return(
            <div className="ChartItem">
                <ChartBlock value={this.props.value} />
            </div>
        );
    }
}

export default ChartItem;