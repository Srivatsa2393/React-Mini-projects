import React, { Component } from 'react'

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