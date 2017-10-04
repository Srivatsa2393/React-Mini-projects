import React, { Component } from 'react';

class Carousel extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentImage: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const imageNumber = event.target.id.replace('image-', '');
        this.setState({ currentImage: imageNumber });
    }
    render() {
        return(
            <div className="Images" data-image={this.state.currentImage}>
                <div className="Dots">
                    <div className="Dot" id="image-0" onClick={this.handleClick}></div>
                    <div className="Dot" id="image-1" onClick={this.handleClick}></div>
                    <div className="Dot" id="image-2" onClick={this.handleClick}></div>
                    <div className="Dot" id="image-3" onClick={this.handleClick}></div>
                    <div className="Dot" id="image-4" onClick={this.handleClick}></div>
                    <div className="Dot" id="image-5" onClick={this.handleClick}></div>
                </div>

                <div className="wrapper">
                    <div className="Image">
                        <div className="BGText">&nbsp;M&nbsp;<sup>O</sup> <sup>F</sup>A<sup>R</sup>AH</div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/01.png" alt="" />
                    </div>
                    
                    <div className="Image">
                        <div className="BGText">
                            <sup>Z</sup>&nbsp;<sub>O</sub>&nbsp;O<br />&nbsp;M
                        </div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/02.png" alt="" />
                    </div>
                    
                    <div className="Image">
                        <div className="BGText">
                            PEG<br />ASU
                        </div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/03.png" alt="" />
                    </div>
                    
                    <div className="Image">
                        <div className="BGText">
                            &nbsp;3<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                        </div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/04.png" alt="" />
                    </div>
                    
                    <div className="Image">
                        <div className="BGText">
                            <sub>S</sub>&nbsp;P<br />R&nbsp;<sub>I</sub>&nbsp;NT
                        </div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/05.png" alt="" />
                    </div>

                    <div className="Image">
                        <div className="BGText">
                            R&nbsp;<sub>U</sub><br />&nbsp;&nbsp;&nbsp;N
                        </div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/06.png" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;