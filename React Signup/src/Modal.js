import React, { Component } from 'react'
import Input from '/Input';

class Modal extends Component{
    render(){
        return(
            <div className="Modal">
                <form onSubmit={this.props.onSubmit} className="ModalForm"> 
                    <Input />
                </form>
            </div>
        );
    }
}

export default Modal;