import React, { Component } from 'react';

class Filter extends Component{
    render() {
        return(
            <h1>Filter Component</h1>
        );
    }
}

Filter.propTypes = {
    onClick: React.PropTypes.func,
    filterFunctions: React.PropTypes.shape({
        contrast: React.PropTypes.number,
        hue: React.PropTypes.number,
        brightness: React.PropTypes.number,
        saturate: React.PropTypes.number,
        sepia: React.PropTypes.number
    })
};

export default Filter;