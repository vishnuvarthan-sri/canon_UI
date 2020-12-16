import React, { Component } from "react";
import ReactTable from "react-table-v6"
import 'react-table-v6/react-table.css'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
    Icon,
    Segment,
    Checkbox,
    Button,
    Modal,
    Statistic,
    Grid,
    Dropdown,
    Label,
    Image,
    ModalActions
} from "semantic-ui-react";
import selectTable from "react-table-6/lib/hoc/selectTable";
import CannonProduct from './cannonProduct.jsx';
import {
    fetchCannonStoreAction,
    fetchCannonProductAction,
    fetchAuditorsAction,
  } from "../../actions/cannon-action";
// var TableSelect = require('react-table-select');
// import TableSelect from "react-select-table";
// import 'react-select-table/dist/index.css';
var CheckBoxTable = selectTable(ReactTable);
export class CannonStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStore: {},
            isStoreView: true,
            Product: true,
            storeId: "",
            value: "Initial Stores",
            initialAndAssignedStores: [],
            pendingAndCompletedStores: [],
            selectAll: true,
            userSelectionAll: false,
            openAssignModal: false,
            storeList:[],
            storeStatus: ""
        };
    }

    componentDidMount(){
        this.props.fetchCannonStoreAction();
       this.setState({
           isStoreView:false,
           value:"Intial Store"
       });
        

    }
    onClose = () => {
        this.props.onClose();
    };

    static getDerivedStateFromProps(nextProps){
        let data = []
        if(nextProps.cannon.cannonStoreList){
          data.push(nextProps.cannon.cannonStoreList)
        }
        console.log(data,"----")
        return{
          storeList:data
        }
      } 


    IntialTable = () => {
        this.setState({
            isStoreView: false
        });
        this.setState({
            value: "Initial Stores"
        });
          var stores = this.state.storeList;
        //  console.log(stores,"helloooo")
        var initialAndAssignedStores = [];
            stores.forEach(data => {
                console.log(data[1].status,"statussss")
              if (data[1].status === "Initial") {
                initialAndAssignedStores.push(data[1]);
              }
            });
          
          this.setState({
            initialAndAssignedStores,
          });
    }
    IntialTable2 = () => {

        this.setState({
            isStoreView: false
        });
        this.setState({
            value: "Assigned Stores"
        });
        var stores =this.state.storeList;
        var initialAndAssignedStores = [];
            stores.forEach(data => {
              if (data[2].status === "Assigned") {
                initialAndAssignedStores.push(data[2]);
              }
            });
          this.setState({
            initialAndAssignedStores
          });
    }
    CompletedTable = () => {

        this.setState({
            isStoreView: true
        });
        this.setState({
            value: "Inprogress Stores"
        });
        var stores =this.state.storeList;
        var pendingAndCompletedStores = []; 
            stores.forEach(data => {
              if (data[0].status === "Completed") {
                pendingAndCompletedStores.push(data[0]);
              }
            });
          
          this.setState({
            pendingAndCompletedStores:pendingAndCompletedStores
          });
    }
    CompletedTable2 = () => {
        this.setState({
            isStoreView: true
        });
        this.setState({
            value: "Completed Stores"
        });
        var stores =this.state.storeList;
        var pendingAndCompletedStores = [];
            stores.forEach(data => {
              if (data[0].status === "Completed") {
                pendingAndCompletedStores.push(data[0]);
              }
            });
          this.setState({
               pendingAndCompletedStores
          });
    }

    onProduct = () => {
        this.setState({
            Product: false
        });
    }

    closeProduct = () => {
        this.setState({
            Product: true
        });
    }

    Assign = () => {
        this.setState({
            selectAll: false
        })
    }
    AssignOff = () => {
        this.setState({
            selectAll: true
        })
    }
    



    render() {
        var stores =this.props.cannon.cannonStoreList;
       
        var Modallist = [{
            email: "xxx123@gmail.com"
        },
        {
            email: "yyy456@gmail.com"
        },
        {
            email: "zzz789@gmail.com"
        }]
        var columns = [
            {
                Header: "Region",
                accessor: "region",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.region}
                        onClick={this.onProduct}
                    />
            },
            {
                Header: "State",
                accessor: "state",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.state}
                        onClick={this.onProduct}
                    />
            },
            {
                Header: "City",
                accessor: "city",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.city}
                        onClick={this.onProduct}
                    />
            },
            {
                Header: "CIS Version",
                accessor: "cisVersion",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.cisVersion}
                        onClick={this.onProduct}
                    />
            },
            {
                Header: "Store Name",
                accessor: "shipSiteLocation",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.shipSiteLocation}
                        onClick={this.onProduct}
                    />
            }
        ];
        var Assignedcolumns = [
            {
                Header: "Region",
                accessor: "region",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.region}
                    />
            },
            {
                Header: "State",
                accessor: "state",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.state}
                   
                    />
            },
            {
                Header: "City",
                accessor: "city",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.city}
                    
                    />
            },
            {
                Header: "Assignee",
                accessor: "userName",
                width: 125,
                style: { textAlign: "left", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.userName}
                    
                    />
            },
            {
                Header: "CIS Version",
                accessor: "cisVersion",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.cisVersion}
                    
                    />
            },
            {
                Header: "Store Name",
                accessor: "shipSiteLocation",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.shipSiteLocation}
                  
                    />
            }
        ];
        var InitialColumn = [
            {
                Header: "Region",
                accessor: "region",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.region}
                    
                    />
            },
            {
                Header: "State",
                accessor: "state",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.state}
                    
                    />
            },
            {
                Header: "City",
                accessor: "city",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.city}
                   
                    />
            },
            {
                Header: "CIS Version",
                accessor: "cisVersion",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.cisVersion}
                   
                    />
            },

            {
                Header: "Store Name",
                accessor: "shipSiteLocation",
                style: { textAlign: "center", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.shipSiteLocation}
                    
                    />
            }
        ];

        const UserColumn = [
            {
                Header: "Email Id's",
                accessor: "email",
                style: { textAlign: "left", cursor: "pointer" },
                Cell: row =>
                    <AuditTableCell
                        row={row.original}
                        text={row.original.email}
                    />
            }
        ];

        return (
            <div style={{ flexGrow: 1, display: "flex", flexFlow: "column" }}>
                { this.state.Product &&
                    <div>
                        <div style={{ padding: 20, display: "inline-block" }}>
                            <Segment
                                onClick={this.onClose}
                                style={{
                                    color: "#808080",
                                    float: "right",
                                    cursor: "pointer",
                                    marginTop: 20,
                                    display: "inline-block",
                                    // top:"15",
                                    position: "absolute",
                                    right: 50
                                }}
                            >
                                <Icon name="arrow" className="left large" color="brown" />


                            </Segment>
                            {/* <Segment
                                onClick={this.onProduct}
                                style={{
                                    color: "#808080",
                                    float: "right",
                                    cursor: "pointer",
                                    marginTop: 20,
                                    display: "inline-block",
                                    // top:"15",
                                    position: "absolute",
                                    right: 20
                                }}
                            >
                                <Icon name="arrow" className="right large" color="brown" />


                            </Segment> */}
                            {/* <Button >Download Report</Button> */}

                            <h1
                                style={{
                                    paddingLeft: 30,
                                    color: "orange",
                                    display: "inline-block"
                                }}
                            >
                                Canon Stores
              </h1>
                            <div style={{ display: "inline-block", marginLeft: 30 }}>
                                <Button


                                    label={
                                        <Label size="medium" color="grey" style={{ cursor: "pointer" }} >
                                            Initial Stores
                                     </Label>
                                    }
                                    value="Initial Stores"
                                    onClick={this.IntialTable}
                                    style={{ marginLeft: 10 }}
                                />
                                <Button


                                    label={
                                        <Label
                                            color="blue"
                                            size="medium"
                                            style={{ cursor: "pointer" }}

                                        >
                                            Assigned Stores
                    </Label>
                                    }
                                    value="Assigned Stores"
                                    onClick={this.IntialTable2}
                                    style={{ marginLeft: 10 }}
                                />
                                <Button


                                    // label="InProgress Stores"
                                    label={
                                        <Label
                                            color="green"
                                            size="medium"
                                            style={{ cursor: "pointer" }}
                                        >
                                            InProgress Stores
                    </Label>
                                    }
                                    value="InProgress Stores"
                                    onClick={this.CompletedTable}
                                    style={{ marginLeft: 10 }}
                                />
                                <Button


                                    label={
                                        <Label
                                            color="red"
                                            size="medium"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Completed Stores
                    </Label>
                                    }
                                    value="Completed Stores"
                                    onClick={this.CompletedTable2}
                                    style={{ marginLeft: 10 }}
                                />
                            </div>
                            <div style={{ display: "flex", marginBottom: 10, marginRight: 10 }}>
                                <div style={{ marginLeft: "auto", order: 1 }}>
                                    <Button
                                        color="teal" onClick={this.Assign}// style={{ border: "2px solid teal" }}
                                    >
                                        Assign Stores
                                </Button>
                                </div>
                            </div>
                        </div>

                        {!this.state.selectAll &&
                            <div>
                                <Modal
                                    open={!this.state.selectAll}
                                    onClose={this.AssignOff}
                                    size="small">
                                    <Modal.Content>
                                        <CheckBoxTable
                                            noDataText="We couldn't find anything"
                                            filterable={true}
                                            defaultPageSize={20}
                                            //   defaultFilterMethod={this.searchFilter}
                                            data={Modallist}
                                            columns={UserColumn}
                                            //   className="-striped -highlight"
                                            //   ref={r => (this.checkboxTable = r)}
                                            //   toggleSelection={this.usertoggleSelection}
                                            //   selectAll={this.state.selectAll}
                                            // toggleAll={this.toggleAll}
                                            selectType="checkbox"
                                        // isSelected={this.isUserSelected.bind(this)}
                                        //   getTrProps={this.rowFn}
                                        />
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button color="red" onClick={this.AssignOff}>
                                            <Icon name="remove" /> Close
                </Button>
                                    </Modal.Actions>
                                </Modal>
                            </div>}





                        <div style={{ display: "flex", flexGrow: 1, flexFlow: "column" }}>
                        <div>
                            {this.state.isStoreView
                                ? <ReactTable
                                    noDataText="We couldn't find anything"
                                    data={this.state.pendingAndCompletedStores}
                                    columns={
                                        this.state.value === "Inprogress Stores" ? columns : this.state.value === "Completed Stores" ? columns : []
                                    }
                                    style={{ height: "85%", width: "95%", marginLeft: 30 }}

                                    filterable={true}
                                    defaultPageSize={20}
                                    sortable={true}
                                    onClick={this.onProduct}
                                />
                                : <CheckBoxTable
                                    noDataText="We couldn't find anything"
                                    filterable={true}
                                    defaultPageSize={20}
                                    // defaultFilterMethod={this.searchFilter}
                                    data={this.state.initialAndAssignedStores}
                                    columns={
                                        this.state.value === "Initial Stores" ? InitialColumn : this.state.value === "Assigned Stores" ? Assignedcolumns : []
                                    }
                                    style={{ height: "85%", width: "95%", marginLeft: 30 }}
                                    sortable={true}
                                    // className="-striped -highlight"
                                    // ref={r => (this.checkboxTable = r)}
                                    // toggleSelection={this.usertoggleSelection}
                                    // selectAll={this.state.selectAll}
                                    // // toggleAll={this.toggleAll}
                                     selectType="checkbox"
                                     
                                // // isSelected={this.isUserSelected.bind(this)}
                                // getTrProps={this.rowFn}
                                />

                            }
                            </div>
                        </div>





                       
                    </div>}



                { !this.state.Product &&
                    <div style={{ flexGrow: 1, display: "flex" }}>
                        <CannonProduct onClose={this.closeProduct} />
                    </div>}


            </div>
        );
    }
}
function AuditTableCell(props) {
    function onClick() {
        props.onClick(props.row);
    }
    return (
        <div style={props.style} onClick={onClick} >
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
        fetchCannonProductAction,
        fetchAuditorsAction,
        fetchCannonStoreAction
      },
      dispatch
    );
  };
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CannonStore)
  );