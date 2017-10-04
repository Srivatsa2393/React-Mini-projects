import React, { Component } from 'react';
import Header from './Header';
import Information from './Information';

class Product extends Component{
    render() {
        return(
            <div className="Product">
                <Header />
                <div className="Content">
                    <Information />
                </div>
            </div>
        );
    }
}

export default Product;