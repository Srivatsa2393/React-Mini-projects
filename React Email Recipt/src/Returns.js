import React, { Component } from 'react';
import Signoff from './Signoff';

class Returns extends Component{
    render() {
        return(
            <div>
                <h3>Damages &amp; returns</h3>
                <p>
                    While every care is taken to ensure your print gets to you in one piece (and un-damaged!), 
                    sometimes bad stuff happens. 
                    Drop me an email and I'll see what I can do. No promises though, these prints are limited after all.
                </p>
                <p>
                    Thanks again, you rock!<br /><strong>Srivatsa</strong>
                </p>
                <Signoff link="https://srivatsa.info" label="srivatsa.info" />
            </div>
        );
    }
}

export default Returns;