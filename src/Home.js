
import React from "react";
 
import ReactDOM from "react-dom";
 
 class MyForm extends React.Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = {
 
      ID: "",
 
      Name: "",
 
      Rollno: "",
 
      Gender: "",
 
    };
 
  }
 
  changeHandler = (e) => {
 
    const name = e.target.name;
 
    const value = e.target.value;
 
    this.setState({
 
      ...this.state,
 
      [name]: value,
 
    });
 
  };
 
 
 
 
  render() {
 
    return (
 
      <form>
 
        <p>
 
          <label>
 
            Student’s ID :{" "}
 
            <input
 
              type="text"
 
              name="ID"
 
              value={this.state.ID}
 
              onChange={this.changeHandler}
 
            ></input>
 
          </label>
 
          <p>My Id is :{this.state.ID}</p>
 
        </p>
 
        <p>
 
          <label>
 
            Student’s Name :{" "}
 
            <input
 
              type="text"
 
              name="Name"
 
              value={this.state.Name}
 
              onChange={this.changeHandler}
 
            ></input>
 
          </label>
 
        </p>
 
        <p>Student Name is :{this.state.Name}</p>
 
        <p>
 
          <label>
 
            Student’s Rollno :{" "}
 
            <input
 
              type="number"
 
              name="Rollno"
 
              value={this.state.Rollno}
 
              onChange={this.changeHandler}
 
            ></input>
 
          </label>
 
        </p>
 
        <p>Student Roll number is:{this.state.Rollno}</p>
 
        <p>
 
          <label>
 
            Student’s Gender :{" "}
 
            <input
 
              type="text"
 
              name="Gender"
 
              value={this.state.Gender}
 
              onChange={this.changeHandler}
 
            ></input>
 
          </label>
 
        </p>
 
        <p>I am : {this.state.Gender}</p>
 
      </form>
 
    );
 
  }
 
}
 
 
 
 
ReactDOM.render(<MyForm />, document.getElementById("root"))