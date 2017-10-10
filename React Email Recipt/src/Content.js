import React, { Component } from 'react';
import Order from './Order';
import Returns from './Returns';

class Content extends Component{
    render() {
        return(
            <div className="Content">
                <div className="wrapper">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.body}</p>
                    <Order 
                        title="Vatten" 
                        size="A1 (841 x 594 mm)" 
                        image="http://static1.squarespace.com/static/55acc005e4b098e615cd80e2/57c48747725e254fbeba117c/57c5304a9f745671dd496603/1472540751420/mock.jpg?format=1000w" 
                        currency="SEK" price="799" 
                        shipping="79"
                        link="https://static.pexels.com/photos/34950/pexels-photo.jpg"
                    />
                    <Returns />
                </div>
            </div>
        );
    }
}

export default Content;