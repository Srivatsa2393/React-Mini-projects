import React, { Component } from 'react';
import Header from './Header';
import Information from './Information';
import Carousel from './Carousel';

class Product extends Component{
    render() {
        return(
            <div className="Product">
                <Header />
                <div className="Content">
                    <Information />
                    <Carousel />
                </div>
            </div>
        );
    }
}

export default Product;