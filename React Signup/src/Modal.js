import React, { Component } from 'react'
import Input from './Input';

class Modal extends Component{
    render(){
        return(
            <div className="Modal">

                <form 
                    onSubmit={this.props.onSubmit} 
                    className="ModalForm" 
                > 
                    <Input 
                        id="name" 
                        type="text" 
                        placeholder="Srivatsa" 
                    />

                    <Input 
                        id="username" 
                        type="email" 
                        placeholder="sri007vatsa@gmail.com" 
                    />

                    <Input 
                        id="password" 
                        type="password" 
                        placeholder="password" 
                    />

                    <button>
                        Log in <i className="fa fa-fw fa-chevron-right"></i>
                    </button>

                </form>
            </div>
        );
    }
}

export default Modal;