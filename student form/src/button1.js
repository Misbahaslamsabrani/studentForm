import React, { Component } from 'react';
import './App.css';
class ButtonCom extends Component{
    render(){
        return <button className={this.props.className}>{this.props.text}</button>
    }
}
export default ButtonCom;