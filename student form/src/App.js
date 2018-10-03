import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import InputField from './formInput1';
import ButtonCom from './button1';
import Mytr from './showTr';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      studentName: "",
      studentAge: "",
      studentGender:"",
      allStudent: [],
      onAdd: false,
      editIndex: null
    }
  }
  changeField = (event) => {
    const { name, value } = event.target;
    this.setState({[name] : value});
  }
  submitForm = (event) => {
    event.preventDefault();
    const copyAllStudent = this.state.allStudent.slice(0);
    function TemObj (name, age, gender){
      this.name = name;
      this.age = age;
      this.gender = gender; 
    }
    let studendData = new TemObj(this.state.studentName, this.state.studentAge, this.state.studentGender)
    let editedOjb = {name: this.state.studentName, age: this.state.studentAge, 
      gender: this.state.studentGender }
    if(this.state.studentName === "" || this.state.studentAge === "" || this.state.studentGender === "" ){
      return
    }
    else if(this.state.editIndex == null ){
    copyAllStudent.push(studendData);}
    else{
      copyAllStudent[this.state.editIndex] = editedOjb
    } 

    this.setState({allStudent : copyAllStudent, studentName: "",
    studentAge: "",
    studentGender:"",
  onAdd: true, editIndex: null});
    
    
}
edititem = (index) => {
this.setState({onAdd: false, 
  editIndex: index,
studentName: this.state.allStudent[index].name,
studentAge: this.state.allStudent[index].age,
studentGender: this.state.allStudent[index].gender})

}
deleitem = (index) => {

  this.state.allStudent.splice(index,1);
  this.setState({allStudent: this.state.allStudent})
  if(this.state.allStudent.length === 0){
    this.setState({onAdd: false})
  }
}
addMore = () => {
  this.setState({onAdd: false})
}
  render() {
    if(this.state.onAdd){
    return (<div><table>
      <thead>
          <tr><th>S.No</th><th>Name</th><th>Age </th><th>Gender</th>
          <th></th><th></th>
          </tr>
          </thead>
          <Mytr arr={this.state.allStudent} deleitem={this.deleitem} edititem={this.edititem}/>
    </table> <div className="but2"><button className="btn btn-primary" onClick={this.addMore}>Add More Student</button></div></div>)}
    return (
      <div className="App">
        
        <div className="heading">Student Form</div>
        <form onSubmit={this.submitForm} className="form-group">
          <TextField
          id="studentName"
          label="Name"
          name="studentName"
          value={this.state.studentName}
          onChange={this.changeField} 
          margin="normal"
        />
          
          <br /> <br />
          <TextField
          id="studentAge"
          label="Age"
          name="studentAge"
          value={this.state.studentAge}
          onChange={this.changeField} 
          margin="normal"
          type="number"
        />
          <br /> <br />
          <label htmlFor="gender">Gender:</label>  &nbsp; &nbsp;
          <InputField type="radio"  value="Female" name="studentGender" id="female" changeField={this.changeField} /> Female &nbsp;
          <InputField type="radio" value="Male" name="studentGender" id="male" changeField={this.changeField} /> Male
          <br /> <br />
          <div className="but"><ButtonCom className="btn btn-primary" text="Add Student"/></div>
        </form>
        </div>
    );
  }
}

export default App;
