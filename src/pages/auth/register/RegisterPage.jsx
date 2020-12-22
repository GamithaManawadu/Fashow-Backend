
             import React, { Component } from 'react';
             import { makeStyles, Typography, Button, TextField } from "@material-ui/core";
             import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
             import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
             import axios from 'axios';
             import './register.css';
             import IconButton from '@material-ui/core/IconButton';
             import PhotoCamera from '@material-ui/icons/PhotoCamera';
             import { register } from '../UserFunctions';
import { render } from '@testing-library/react';
              //import { render } from '@testing-library/react';
             
             export default class RegisterPage extends Component {
               constructor(props) {
                 super(props);
             
                 this.onChangeUsername = this.onChangeUsername.bind(this);
                 this.onChangeEmail = this.onChangeEmail.bind(this);
                 this.onChangeAddress = this.onChangeAddress.bind(this);
                 this.onChangeContact = this.onChangeContact.bind(this);
                 this.onChangeJob = this.onChangeJob.bind(this);
                 this.onChangeImage = this.onChangeImage.bind(this);
                 this.onChangePassword = this.onChangePassword.bind(this);
                 this.onSubmit = this.onSubmit.bind(this);
             
                 this.state = {
                   username: '',
                   email: '',
                   address:'',
                   contact:'',
                   job:'',
                   image:'',
                   password:'',


                   usernameError: "",
                   emailError: "",
                   addressError: "",
                   contactError: "",
                   jobError: "",
                   imageError: "",
                   passwordError: ""


                 };
                }
               
               
               onChangeUsername(e) {
                 this.setState({
                   username: e.target.value
                 });
               }
               onChangeEmail(e) {
                 this.setState({
                   email: e.target.value
                 })  
               }
               onChangeAddress(e) {
                 this.setState({
                   address: e.target.value
                 })
               }
               onChangeContact(e) {
                 this.setState({
                   contact: e.target.value
                 })
               }
               onChangeJob(e) {
                 this.setState({
                   job: e.target.value
                 })
               }
               onChangeImage(e) {
                 this.setState({
                   image: e.target.value
                 })
               }
               onChangePassword(e) {
                 this.setState({
                   password: e.target.value
                 })
               }

               validate = () => {
                let isError = false;
            
                const errors = {

                  usernameError: "",
                   emailError: "",
                   addressError: "",
                   contactError: "",
                   jobError: "",
                   imageError: "",
                   passwordError: ""
                };


                if(this.state.username.length < 3){
                  isError = true;
                  errors.usernameError = " Name must be at least 3 characters";
              }

              if(this.state.email.indexOf("@") === -1){
                isError = true;
                errors.emailError = "Require Valid Email Address";
            }

            if(this.state.address === ""){
              isError = true;
              errors.addressError = "Please enter admin address";
            }

            if(this.state.contact.length < 10){
              isError = true;
              errors.contactError = "Mobile Number must be at least 10 numbers";
          }

          if(this.state.job === ""){
            isError = true;
            errors.jobError = "Please enter Admin Job";
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

        if ("contact" !== "undefined") {
          var pattern = new RegExp(/^[0-9\b]+$/);
          if (!pattern.test(this.state.contact)) {
            isError = true;
            errors.contactError = "Please enter a valid mobile number";
          }else if(this.state.contact.length < 10){
            isError = true;
            errors.contactError = "Please enter valid phone number.";
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
                   username: this.state.username,
                   email: this.state.email,
                   address: this.state.address,
                   contact: this.state.contact,
                   job: this.state.job,
                   image: this.state.image,
                   password: this.state.password,
                 };
                 axios.post('http://localhost:5000/admin/add', obj)
                     .then(res => 
                      {
                      alert('Admin Added Successfully ')
                      console.log(res.data);
                    })
                  }
                
               }
              
               
             
             
             
                
                
                render(){
               return (
                 
                 <>
                 <OftadehLayout>
                 <div className="container">
                   <div className="card">
                     <Typography variant="h5" component="h1">
                       Register Users
                     </Typography>
                     
                     {/* <Typography className={classes.brand} variant="h5" component="h1">
                       Login
                     </Typography> */}
                     <Typography className="botom" variant="body1">
                       Create Admin account
                     </Typography>
                     <form onSubmit={this.onSubmit}>
                     
                       <TextField
                         size="small"
                         label="Username"
                         variant="outlined"
                         margin="dense"
                         fullWidth
                         value={this.state.username}
                      onChange={this.onChangeUsername}
                       />
                        <span className="text-danger">{this.state.usernameError}</span>
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
                         label="Address"
                         variant="outlined"
                         margin="dense"
                         fullWidth
                         value={this.state.address}
                      onChange={this.onChangeAddress}
                       />
                        <span className="text-danger">{this.state.addressError}</span>
                        <TextField
                         size="small"
                         label="Contact"
                         variant="outlined"
                         margin="dense"
                         fullWidth
                         value={this.state.contact}
                      onChange={this.onChangeContact}
                       />
                        <span className="text-danger">{this.state.contactError}</span>
                        <TextField
                         size="small"
                         label="Admin Job"
                         variant="outlined"
                         margin="dense"
                         fullWidth
                         value={this.state.job}
                      onChange={this.onChangeJob}
                       />
                        <span className="text-danger">{this.state.jobError}</span>
                         
                           <input accept="image/*" className="input" id="icon-button-file" type="file"
                           value={this.state.image}
                           onChange={this.onChangeImage} />
                           <label htmlFor="icon-button-file">
                             <IconButton color="primary" aria-label="upload picture" component="span">
                               <PhotoCamera />
                             </IconButton>
                             
                           </label>
                           
                           <label htmlFor="contained-button-file">
                             <Button variant="contained" color="primary" component="span">
                               Upload Profile Picture
                               
                             </Button>
                             
                           </label>
                           
                         
                   
                
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
             
                       <TextField
                         size="small"
                         label="Repeat password"
                         type="password"
                         variant="outlined"
                         margin="dense"
                         fullWidth
                         value={this.state.password}
                      onChange={this.onChangePassword}
                       />
                       <div className="botom">
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
                       </div>
                     </form>
                     <Typography variant="caption">&copy; Fashow |Admin Area</Typography>
                   </div>

                   
                   
                  
                 </div>
                 </OftadehLayout>
                 </>
                 )
                  }
                }
                
                
                
            
          
            


/*import React, { Component } from 'react';
import axios from 'axios';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      First_Name: '',
      Last_Name: '',
      Email_Address: '',
      Mobile_Number: '',
      Home_Address: '',
      Password: '',

      FirstNameError:'',
      LastNameError:'',
      EmailAddressError:'',
      MobileNumberError:'',
      HomeAddressError:'',
      PasswordError:''
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
        FirstNameError:"",
        LastNameError:"",
        EmailAddressError:"",
        MobileNumberError:"",
        HomeAddressError:"",
        PasswordError:""
    };

      if(this.state.First_Name.length < 3){
          isError = true;
          errors.FirstNameError = "First Name must be at least 3 characters";
      }

      if(this.state.Last_Name.length < 3){
          isError = true;
          errors.LastNameError = "Last Name must be at least 3 characters";
      }

      if(this.state.Mobile_Number.length < 10){
          isError = true;
          errors.MobileNumberError = "Mobile Number must be at least 10 numbers";
      }

      if(this.state.Password.length < 6){
          isError = true;
          errors.PasswordError = "Password must be at least 6 characters";
      }

      if(this.state.Email_Address.indexOf("@") === -1){
          isError = true;
          errors.EmailAddressError = "Require Valid Email Address";
      }

      if ("Email_Address" !== undefined){
        var patter = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!patter.test(this.state.Email_Address)){
          isError = true;
          errors.EmailAddressError = "Please enter valid email address"
        }
      }

      if ("Mobile_Number" !== "undefined") {
          var pattern = new RegExp(/^[0-9\b]+$/);
          if (!pattern.test(this.state.Mobile_Number)) {
            isError = true;
            errors.MobileNumberError = "Please enter only numbers.";
          }else if(this.state.Mobile_Number.length < 10){
            isError = true;
            errors.MobileNumberError = "Please enter valid phone number.";
          }
      }

      if(this.state.Home_Address === ""){
        isError = true;
        errors.HomeAddressError = "Please enter home address";
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
        First_Name: this.state.First_Name,
        Last_Name: this.state.Last_Name,
        Email_Address: this.state.Email_Address,
        Mobile_Number: this.state.Mobile_Number,
        Home_Address: this.state.Home_Address,
        Password: this.state.Password
      };

      axios.post('http://localhost:4000/admin/add', obj)  //http://localhost:4000/business/add
      .then(res =>
          {
              alert('Admin Added Successfully ')
          console.log(res.data);
  
  

  })
}
}



  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-3'>
          <div className='col-md-6 mt-5 mx-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className='h3 mb-3 font-weight-normal' style={{marginLeft: 180}} ><label><span className="fa fa-user" style={{ fontSize: "28px" }}></span> </label> Register</h1>
                
              <div className='form-group'>
                <label htmlFor='First_Name'>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='First_Name'
                  placeholder='Enter your First Name'
                  value={this.state.First_Name}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.FirstNameError}</span>
              </div>

              <div className='form-group'>
                <label htmlFor='Last_Name'>Last_Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='Last_Name'
                  placeholder='Enter your Last Name'
                  value={this.state.Last_Name}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.LastNameError}</span>
              </div>
              <div className='form-group'>
                <label htmlFor='Email_Address'>Email Address</label>
                <input
                  type='email'
                  className='form-control'
                  name='Email_Address'
                  placeholder='Enter Email Address'
                  value={this.state.Email_Address}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.EmailAddressError}</span>
              </div>
              <div className='form-group'>
                <label htmlFor='Mobile_Number'>Mobile Number</label>
                <input
                  type='number'
                  className='form-control'
                  name='Mobile_Number'
                  placeholder='Enter Mobile Number'
                  value={this.state.Mobile_Number}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.MobileNumberError}</span>
              </div>
              <div className='form-group'>
                <label htmlFor='Home_Address'>Home Address</label>
                <input
                  type='text'
                  className='form-control'
                  name='Home_Address'
                  placeholder='Enter Home Address'
                  value={this.state.Home_Address}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.HomeAddressError}</span>
              </div>
              <div className='form-group'>
                <label htmlFor='Password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='Password'
                  placeholder='Password'
                  value={this.state.Password}
                  onChange={this.onChange}
                  required
                />
                <span className="text-danger">{this.state.PasswordError}</span>
              </div>
              <button
                type='submit'
                className='btn btn-lg btn-primary btn btn-outline-success'
                style={{marginLeft: 200}}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;*/
