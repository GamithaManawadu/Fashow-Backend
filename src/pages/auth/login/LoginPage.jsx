import React, { Component } from 'react';
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { login } from '../UserFunctions';


class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password:'',
      
      emailError: "",
      passwordError: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let isError = false;

    const errors = {
      emailError: "",
     passwordError: ""
    };

    if ("email" !== undefined){
      var patter = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(!patter.test(this.state.email)){
        isError = true;
        errors.emailError = "Please enter valid email address"
      }
    }

    if(this.state.password.length < 6 ){
      isError = true;
      errors.passwordError = "Please enter your password"
    }

    this.setState({
      ...this.state,
      ...errors
  });

  return isError;

}
onSubmit(e) {
  e.preventDefault();

  const err = this.validate();
    if(!err){

    const admin = {
      email: this.state.email,
      password: this.state.password
    };

    login(admin).then(res => {
      if (res) {
        alert('Successfully Logged In')
        
        this.props.history.push(`../dashboard/DashboardPage`);
      }
    });
  }
}

render() {

  return (
   <>
      
        <Typography variant="h5" component="h1">
          Login
        </Typography>
        
        <Typography className="aaa" variant="body1">
          Sign In to your account
        </Typography>
        <form noValidate onSubmit={this.onSubmit}>
        <input type="text"
                      className="form-control" placeholder="Email Address"
                      name="Email_Address"
                      value={this.state.email}
                      onChange={this.onChange} required
                    />
          <span className="text-danger">{this.state.emailError}</span>
          <TextField
            size="small"
            label="Password"
            type="password"
            variant="outlined"
            margin="dense"
            fullWidth
            value={this.state.password}
            onChange={this.onChange} required
          />
          <span className="text-danger">{this.state.passwordError}</span>
          <Button
            onClick={() => this.props.history.push("/pages/auth/forgot-password")}
            color="primary"
          >
            Forgot password?
          </Button>
          <div className="btn">
          <button
                type='submit'
                className='btn btn-lg btn-primary btn btn-outline-success'
                style={{marginLeft: 200}}
              >
                Sign In
              </button>
            
          </div>
        </form>
        <Typography variant="caption">&copy; Fashow |Admin Area</Typography>
      
      
    </>
  );
    }
  }

export default LoginPage;