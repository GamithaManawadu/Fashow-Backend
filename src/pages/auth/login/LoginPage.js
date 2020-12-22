 import React, { Component } from 'react';
             import { makeStyles, Typography, Button, TextField } from "@material-ui/core";
             import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
             import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
             import axios from 'axios';
             
             import IconButton from '@material-ui/core/IconButton';
             import PhotoCamera from '@material-ui/icons/PhotoCamera';
             import { register } from '../UserFunctions';
import { render } from '@testing-library/react';
              //import { render } from '@testing-library/react';
             
             export default class LoginPage extends Component {
               constructor(props) {
                 super(props);
             
                 
                 this.onChangeEmail = this.onChangeEmail.bind(this);
                 
                 this.onChangePassword = this.onChangePassword.bind(this);
                 this.onSubmit = this.onSubmit.bind(this);
             
                 this.state = {
                   email: '',
                   password:'',


                   
                   emailError: "",
                   passwordError: ""


                 };
                }
               
               
              
               onChangeEmail(e) {
                 this.setState({
                   email: e.target.value
                 }); 
               }
              
               onChangePassword(e) {
                 this.setState({
                   password: e.target.value
                 })
               }

               validate = () => {
                let isError = false;
            
                const errors = {

                 
                   emailError: "",
                   passwordError: ""
                };


               
              if(this.state.email.indexOf("@") === -1){
                isError = true;
                errors.emailError = "Require Valid Email Address";
            }

            

          if(this.state.password.length < 6){
            isError = true;
            errors.passwordError = "Password must be at least 6 characters";
        }

        if ("email" !== undefined){
          var patter = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if(!patter.test(this.state.email)){
            isError = true;
            errors.emailError = "Please enter valid email address"
          }
        }

        

      this.setState({
        ...this.state,
        ...errors
    });
  
    return isError;
 };




    

             
               onSubmit(e) {
                 e.preventDefault();


                 const err = this.validate();
      if(!err){

                 const obj = {
                   
                   email: this.state.email,
                   
                   password: this.state.password,
                 };
                 axios.post('http://localhost:5000/admin/login', obj)
                     .then(res => 
                      {
                        alert('Successfully Logged In')
                        this.props.history.push(`/`);
                     
                    })
                  }
                
               }
              
               
             
             
             
                
                
                render(){
               return (
                 
                 <>
                 
                 <div className="container">
                   <div className="card">
                     <Typography variant="h5" component="h1">
                       Login
                     </Typography>
                     
                     {/* <Typography className={classes.brand} variant="h5" component="h1">
                       Login
                     </Typography> */}
                     
                     <form onSubmit={this.onSubmit}>
                     
                       
                       <TextField
                         size="small"
                         label="Email"
                         variant="outlined"
                         margin="dense"
                         fullWidth
                         value={this.state.email}
                      onChange={this.onChangeEmail}
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
                      onChange={this.onChangePassword}
                       />
                        <span className="text-danger">{this.state.passwordError}</span>
             
                       
                       <Button
                          input type="submit"
                          value="Register"
                           variant="outlined"
                           color="primary"
                           fullWidth
                           className={"btn"}
                           
                         >
                           Register
                         </Button>
                        
                           
                           
                        
                         <Button
                           variant="outlined"
                           color="primary"
                           fullWidth
                           className={"btn"}
                           
                         >
                           Cancel
                         </Button>
                      
                     <Typography variant="caption">&copy; Fashow |Admin Area</Typography>
                  
                   
                   </form>
                  
                 </div>
                 </div>
               
                 </>
                 )
                  }
                }
                