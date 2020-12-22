import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";
import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";

             import IconButton from '@material-ui/core/IconButton';
             import PhotoCamera from '@material-ui/icons/PhotoCamera';

export default class Edit extends Component {
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

  componentDidMount() {
      axios.get('http://localhost:5000/admin/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                username: response.data.username, 
               email: response.data.email,
               address: response.data.address,
               contact: response.data.contact,
               job: response.data.job,
               password: response.data. password
               });
          })
          .catch(function (error) {
              console.log(error);
          })
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
    const obj = {
        username: this.state.username,
        email: this.state.email,
        address: this.state.address,
        contact: this.state.contact,
        job: this.state.job,
        password: this.state.password,
    };
    axios.post('http://localhost:5000/admin/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    
  }
 
  render() {
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
                          value="Update Admin"
                           variant="outlined"
                           color="primary"
                           fullWidth
                           className={"btn"}
                           
                         >
                           Update
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