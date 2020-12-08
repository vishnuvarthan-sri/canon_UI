import React, { Component } from 'react';
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css'
import TabView from "./cannonTabView.jsx";
import {
  fetchCannonTemplatesAction,
  fetchCannonStoreAction, 
} from "../../actions/cannon-action";



class CannonIndex extends Component {
  constructor(props) {
    super(props);
    this.state={
      
      TemplatesView:true,
      
    }
  }
  
 

  handleTableClick = template => {
    console.log("name");
    this.setState({
      TemplatesView:false
    })
    
  }

  AnotherClick = () => {
    console.log("hello new")
    this.setState({
      TemplatesView:true

    })
  }


  render() {

    const data = [
      {
        auditname: 'New',
      },

    ];

    const columns = [{
      Header: 'Templatename',
      accessor: 'auditname',
      style: { textAlign: "center" },
      Cell: info =>
        <AuditTableCell
          row={info.original}
          text={info.original.auditname}
          onClick={this.handleTableClick}
        />
    }
    ];
  
  
    return (
      <div style={{ flexGrow: 1, display: "flex", flexFlow: "column" }}>
        { this.state.TemplatesView &&
          <div>
            <h1 style={{ paddingLeft: 30, flex: "0 0 30px" }}>Templates</h1>

            <div style={{ display: "flex", flexGrow: 1, flexFlow: "column" }}>
              <div>
                <ReactTable
                  noDataText="We couldn't find anything"
                  data={data}
                  columns={columns}
                  defaultPageSize={20}
                  filterable={true}
                  sortable={true}
                  style={{ height: "85%", width: "90%", marginLeft: 30 }}
                  onClick={this.handleTableClick}
                />
              </div>
            </div>

          </div>}
        { !this.state.TemplatesView &&

          <div style={{ flexGrow: 1, display: "flex" }}>

            <TabView  onClose={this.AnotherClick}/>

          </div>}



      </div>


    )
  }
}
function AuditTableCell(props) {
  function onClick() {
    props.onClick(props.row);
  }
  return (
    <div style={props.style} onClick={onClick}>
      {props.text}
    </div>
  );
}


export default CannonIndex;


