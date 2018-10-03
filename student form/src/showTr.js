import React, { Component } from 'react';
class Mytr extends Component{
    state = {
        allData:[]
    }
    static getDerivedStateFromProps(nextProps, prevState){
        return {allData: nextProps.arr}
    }
    render(){
        const {deleitem, edititem} = this.props;
        const show = this.state.allData.map((value, index) => {
            return <tr key={index}>
            <td>{index+1}</td>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>{value.gender}</td>
            <td>
            <button className="btn btn-info" onClick={() => {edititem(index)}}>Edit</button> &nbsp;
            </td><td><button className="btn btn-info" onClick={() => {deleitem(index)}}>Delete</button></td></tr>
        })
        return <tbody>
            {show}
            </tbody>
    }
}
export default Mytr;