import React, { Component } from "react";
import {
  Icon,
  Segment,
  Statistic,
  Grid,
  Dropdown,
  Checkbox,
  Button,
  Modal,
  Label,
  Card,
  Form,
  Image
} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
export default class CannonProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      cannonProducts: [],
      questions: [],
      editMode: false,
      productChoosed: "",
      photoTakenDate: "",
      photoUrl: "",
      openModal: false
    };
  }
  onClose = () => {
    this.props.onClose();
  };
  render() {
    return (
      <div style={{ flexGrow: 1, display: "flex", flexFlow: "column" }}>
        <div style={{ padding: 20, display: "inline-block" }}>
          <Segment
            style={{
              color: "#808080",
              float: "right",
              cursor: "pointer",
              marginTop: 7,
              display: "inline-block",
              position: "absolute",
              right: 58
            }}
          >
            <Icon name="arrow" className="left large" color="brown" onClick={this.onClose} />
          </Segment>
          <h1
            style={{
              paddingLeft: 30,
              color: "orange",
              display: "inline-block"
            }}
          >
            Products
              </h1>
        </div>
        <div style={{ padding: 40 }}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <a
                  className="ui teal left ribbon label"
                  style={{ marginLeft: 15 }}
                >
                  Products
                </a>
                <Dropdown
                  placeholder="Select Product"
                  fluid
                  search
                  selection

                />

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }

}