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
        axios.get('http://localhost:5000/feedback/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            alert('Feedback Deleted Successfully ')
            
    }


     

  render() {
    return (
      <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.mobile}
          </td>
          <td>
            {this.props.obj.message}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          
          
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        
        </tr>
    );
        
  }
}


export default TableRow;