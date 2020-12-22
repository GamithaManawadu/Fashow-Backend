import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './table.css';




class TableRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}
  
    
    delete() {
        axios.get('http://localhost:5000/admin/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            
            .catch(err => console.log(err))
            
            window.location = '/show'
            alert('Admin Deleted Successfully ')
    }


     

  render() {
    return (
      <tr>
          <td>
            {this.props.obj.username}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.address}
          </td>
          <td>
            {this.props.obj.contact}
          </td>
          <td>
            {this.props.obj.job}
          </td>
          <td>
            {this.props.obj.password}
          </td>
          <td>
           <button className="btn btn-primary" ><Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link></button>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        
        </tr>
    );
        
  }
}


export default TableRow;