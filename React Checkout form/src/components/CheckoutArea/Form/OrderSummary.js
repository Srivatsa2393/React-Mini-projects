import React from 'react';
import pluralize from 'pluralize';



const OrderSummary = (props) => {

    var duration = this.props.duration + " " +pluralize('day',parseInt(this.props.duration));

    //Initial total calculation
    var initialTotal = this.props.duration * this.props.price;

    //Discount calculation
    var discount = Math.floor((initialTotal/100) * this.props.discount);

    //Subtotal with discount
    var subtotal = initialTotal - discount;

    //Tax calculation
    var tax = Math.floor((subtotal/100) * this.props.tax);

    //Total
    var total = subtotal + tax;

    return(
        <div className="OrderSummary">
            <div className="Title">Order Summary</div>
            <table>
                <tbody>
                    <tr>
                        <td>{this.props.price} x {duration}</td>
                        <td>{initialTotal}</td>
                    </tr>

                    <tr>
                        <td>Discount</td>
                        <td>{discount} GBP</td>
                    </tr>

                    <tr>
                        <td>Subtotal</td>
                        <td>{subtotal} GBP</td>
                    </tr>

                    <tr>
                        <td>Tax</td>
                        <td>{tax} GBP</td>
                    </tr>
                </tbody>
            </table>

            <div className="Total">
                <div className="TotalLabel">Total</div>
                <div className="Amount">
                    {total} <small>GBP</small>
                </div> 
            </div>
        </div>
    );
}

export default OrderSummary;