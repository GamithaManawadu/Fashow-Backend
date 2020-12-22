const { Image } = require('@material-ui/icons');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Admin = new Schema({
    username: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  address: {
    type: String,
    
  },
  contact: {
    type: String,
    
  },
  job: {
    type: String,
    
  },
  imageUrl: {
    type: String,
    
    },
  password: {
    type: String,
    
  }
},{
    collection: 'admin'

   
});

module.exports = mongoose.model('Admin', Admin);