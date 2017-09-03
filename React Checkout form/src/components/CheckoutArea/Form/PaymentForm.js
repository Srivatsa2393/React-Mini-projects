import React from 'react';
import BasicInput from './BasicInput';
import ExpiryDate from './ExpiryDate';
import CheckButton from './CheckButton';

const PaymentForm = (props) => {
    return(
        <div className="PaymentForm">
            <form onSubmit={props.onSubmit}>
                <BasicInput />
                <ExpiryDate />
                <CheckButton />
            </form>
        </div>
    );
};

export default PaymentForm;