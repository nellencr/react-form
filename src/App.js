import React, {Component } from 'react';
import './App.css';

const emailRegex = RegExp (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
       lastName: null,
        email: null,
        password: null,
        formErrors:{
        firstName:"",
        lastName: "",
        email: "",
        password: ""
        }
    };
  }
  

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    console.log("Name: ", name)
    console.log("value:", value)
    switch (name){
      case'firstName':
      formErrors.firstName = value.length <3 
      && value.length> 0 
      ? "minimum 3 charecters required"
      :"";
      break;
      case 'lastName':
      formErrors.lastName = value.length < 3
       && value.length > 0 ?
        "minimum 3 charecters required" 
        : "";
      break;
      case 'email':
      formErrors.email =
       emailRegex.test(value) && value.length >0 
       ? ""
        :'invalid email adress';
      break;
      case 'password':
      formErrors.password = value.length < 6 
      && value.length > 0 ?
        "minimum 6 charecters required" 
        : "";
      break;
      default:
        break;
    }
    
  }
  render () {
  return (
    <div className="wrapper">
    <div className="form-wrapper">
      <h1 >Create Account</h1>
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="firstName">
          <label htmlFor="firstName">First Name</label>
          <input type="text" 
          className=""
           placeholder="First Name"
            name="firstName" 
            noValidate 
            onChange={this.handleChange}
           />
        </div>
        <div className="lastName">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" 
          className=""
           placeholder="Last Name"
            name="lastName" 
            noValidate 
            onChange={this.handleChange}
           />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" 
          className=""
           placeholder="Email"
            name="email" 
            noValidate 
            onChange={this.handleChange}
           />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" 
          className=""
           placeholder="Password"
            name="password" 
            noValidate 
            onChange={this.handleChange}
           />
        </div>
        <div className="createAccount">
          <button className="button" type="submit">Create Account</button>
          <small>Already Have an Account?</small>
        </div>
      </form>
      </div>
    </div>
    );
  }
}



export default App;
