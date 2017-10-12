import React, { Component } from 'react';

class LineChart extends Component{
    render() {

        let highPoint = this.props.data.reduce((prev, cur) => {
            console.log(prev);

            if(cur.value > prev.value) {
                return cur;
            }else{
                return prev;
            }
        });


        let chartItems = this.props.data.map((dataPoint, i){
            let percent = (dataPoint.value / highPoint.value) * 100 + '%';
        });

        return(
            <div className="LineChart">
                LineChart component
            </div>
        );
    }
}

export default LineChart;