import React, { Component } from 'react';

class Filter extends Component{

    getFilterCSSStyles = (functions) => {
        let filterString = '';
        for(let filter in functions){
            if(functions.hasOwnProperty(filter)){
                switch(filter){
                    case 'hue': 
                        filterString+= 'hue-rotate(' + functions[filter] + 'deg) '; break;
                    default: 
                        filterString += filter + '(' + functions[filter] + '%) '
                }
            }
        }
        return filterString;
    }

    render() {
        let filterstring = this.getFilterCSSStyles();
        return(
            <div 
                className="filter"
                style={{width: '100%', height: '100%', filter: filterstring}}
                onClick={}
            >
                
            </div>
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