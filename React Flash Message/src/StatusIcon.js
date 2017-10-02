import React, { Component } from 'react';

class StatusIcon extends Component{
    render(){
        if(this.props.status === "good"){
            var statusClass = 'fa fa-fw fa-check';
        }else{
            var statusClass = 'fa fa-fw fa-times';
        }
        return(
            <div className="StatusIcon" data-status={this.props.status}>
                <i className={statusClass}></i>
            </div>
        );
    }
}

export default StatusIcon;