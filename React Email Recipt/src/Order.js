import React, { Component } from 'react';

class Order extends Component{
    render() {
        var total = parseInt(this.props.price) + parseInt(this.props.shipping);
        return(
            <div>
                <h3>Order Details</h3>
                <div className="Order"> 
                    <div className="OrderPreview">
                        <a href={this.props.link}>
                            <img src={this.props.image} alt={this.props.title}/>
                        </a>
                    </div>
                    <div className="OrderDetails">
                        <div className="Title">{this.props.title}</div>
                        <div className="Size">{this.props.size}</div>
                        <div className="Price">Price: {this.props.price} {this.props.currency}</div>
                        <div className="Shipping">Shipping: {this.props.shipping} {this.props.currency}</div>
                        <div className="Total"><strong>Total: {total} {this.props.currency}</strong></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Order;