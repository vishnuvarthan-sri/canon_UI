import React, { Component } from 'react';
import ReactTable from "react-table-v6"
import 'react-table-v6/react-table.css'
import TabView from "./cannonTabView.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  fetchCannonTemplatesAction,
  fetchCannonStoreAction, 
} from "../../actions/cannon-action";



class CannonIndex extends Component {
  constructor(props) {
    super(props);
    this.state={
      
      TemplatesView:true,
      templateData:[]
    }
  }
  
  componentDidMount() {
    this.props.fetchCannonTemplatesAction();
  }
  
  static getDerivedStateFromProps(nextProps){
    let data = []
    if(nextProps.cannon.cannonTemplate){
      data.push(nextProps.cannon.cannonTemplate)
    }
    return{
      templateData:data
    }
  } 

  handleTableClick = template => {
  
    this.setState({
      TemplatesView:false
    })
    
  }

  AnotherClick = () => {
  
    this.setState({
      TemplatesView:true

    })
  }


  render() {

 
    const columns = [{
      Header: 'Templatename',
      accessor: 'auditName',
      style: { textAlign: "center" },
      Cell: info =>
        <AuditTableCell
          row={info.original}
          text={info.original.auditName}
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
                  data={this.state.templateData}
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


const mapStateToProps = state => {
  return {
    //reducer props to state
    cannon: state.cannon
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchCannonTemplatesAction,
      fetchCannonStoreAction,
      // actions
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CannonIndex)
);


