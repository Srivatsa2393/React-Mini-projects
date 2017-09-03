import React, { Component } from 'react';
import OrderSummary from './Form/OrderSummary';

class Checkout extends Component{
    render() {
        return(
            <div className="Checkout">
                <OrderSummary 
                    duration={this.props.duration} 
                    discount={this.props.discount} 
                    tax={this.props.tax}
                    price={this.props.price}
                />
            </div>
        );
    }
}

export default Checkout;