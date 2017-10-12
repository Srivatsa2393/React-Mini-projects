import React, { Component } from 'react';
import ChartItem from './ChartItem';

class LineChart extends Component{
    render() {
        // Load all data points
		// Treat highest as 100%
		// Scale others as percentages of the highest value
        // Render
        
        let highPoint = this.props.data.reduce((prev, cur) => {
            console.log(prev);

            if(cur.value > prev.value) {
                return cur;
            }else{
                return prev;
            }
        });


        let chartItems = this.props.data.map((dataPoint, i) => {
            let percent = (dataPoint.value / highPoint.value) * 100 + '%';

            return <ChartItem value={percent} name={dataPoint.name} amount={dataPoint.value} />
        });

        return(
            <div className="LineChart">
                {chartItems}
            </div>
        );
    }
}

export default LineChart;