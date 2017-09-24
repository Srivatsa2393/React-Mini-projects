import React, { Component } from 'react';

class Buttons extends Component{
    render() {
        const buttons = this.props.data.share.map((button, i) => {
            return <Button type={button.type} shares={button.count} url={button.url} />
        });
        return(
            <div className="Buttons">
                {buttons}
            </div>
        );
    }
}

export default Buttons;