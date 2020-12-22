import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import OftadehLayout from "../../components/OftadehLayout/OftadehLayout";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import MUIDataTable from "mui-datatables";

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:5000/feedback')
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
  
      const size = "A4"; // Use A1, A2, A3 or A4
  
      const orientation = "landscape"; // portrait or landscape
  
      const marginLeft = 30;
  
      const doc = new jsPDF( orientation, unit, size );

      const title = "Fashow Customer Feedbacks ";

    const headers = [["Customer Name","Contact","Message","Email"]];

    const feedbacks = this.state.business.map(

      feedback=>[

        feedback.name,

        feedback.mobile,

        feedback.message,

        feedback.email,

        
        ]

    );

    let content = {

      startY: 50,

      head: headers,

      body: feedbacks

  };

  doc.setFontSize( 20 );

  doc.text( title, marginLeft, 40 );

  require('jspdf-autotable');                                                       

  doc.autoTable( content );

  doc.save( "FeedbackList.pdf" )

}


    render() {
      return (

        <OftadehLayout>

<Button
        variant="contained"
        color="primary"
        size="small"
        
        marginRight="-130px"
        onClick={() => this.exportPDF()}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
        <div>
          <h3 align="center">Feedback List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Contact</th>
                <th>Message</th>
                <th>Email</th>
                

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