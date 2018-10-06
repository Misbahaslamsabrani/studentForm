import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import ButtonCom from './button1'
import Mytr from './showTr';
import './App.css';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  button: {
    margin: theme.spacing.unit,
  },
  check:{
    display: "grid",
  justifyContent:"center",
  }
});

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
    const { classes } = this.props;
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
      <div className={classes.check}>
        <Typography variant="display3" gutterBottom>
        Student Form
      </Typography>
        <form onSubmit={this.submitForm} className="form-group">
          <TextField
          id="studentName"
          label="Name"
          name="studentName"
          value={this.state.studentName}
          onChange={this.changeField} 
          margin="normal"
          className={classes.textField}
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
          className={classes.textField}
        />
          <br /> <br />
          
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="studentGender"
            className={classes.group}
            value={this.state.studentGender}
            onChange={this.changeField}
          >
            <FormControlLabel value="female" control={<Radio color="primary" />} 
            label="Female" />
            <FormControlLabel value="male" control={<Radio color="primary" />}
             label="Male" />
          </RadioGroup>
        <ButtonCom className="btn btn-primary" text="Add Student" />
      
        </form>
        </div>
    );
  }
}

export default withStyles(styles)(App);
