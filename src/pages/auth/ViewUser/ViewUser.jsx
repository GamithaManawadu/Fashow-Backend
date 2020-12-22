import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import SaveIcon from '@material-ui/icons/Save';
import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:5000/admin')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    //Report generation part starting from here
    exportPDF = () => {

      console.log( "SSSSSSSSSS" )
  
  
  
  
  
      const unit = "pt";
  
      const size = "A3"; // Use A1, A2, A3 or A4
  
      const orientation = "landscape"; // portrait or landscape
  
      const marginLeft = 40;
  
      const doc = new jsPDF( orientation, unit, size );

      const title = "Fashow Admin Details Report ";

    const headers = [["Admin Name","Email","Address","Contact","Job"]];

    const admins = this.state.business.map(

      admin=>[

        admin.username,

        admin.email,

        admin.address,

        admin.contact,

        admin.job
        ]

    );

    let content = {

      startY: 50,

      head: headers,

      body: admins

  };

  doc.setFontSize( 20 );

  doc.text( title, marginLeft, 40 );

  require('jspdf-autotable');                                                       

  doc.autoTable( content );

  doc.save( "AdminList.pdf" )

}

  

    render() {
      return (

        <OftadehLayout>
          
        
        <Button
        variant="contained"
        color="primary"
        size="small"
        
        marginRight="-230px"
        marginTop="80px"
        onClick={() => this.exportPDF()}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <div>
          <h3 align="center">Admin List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Job</th>
                <th>Password</th>

                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
         
        </OftadehLayout>
        
      );
    }
  }