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
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import 'semantic-ui-css/semantic.min.css'
import {
  fetchCannonProductAction,
} from "../../actions/cannon-action";
export class CannonProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cannonProducts: [],
      questions: [],
      editMode: false,
      productChoosed: "",
      photoTakenDate: "",
      photoUrl: "",
      openModal: false,
      value: {}
    };
  }
  componentDidMount() {
    this.props.fetchCannonProductAction();
  }
  static getDerivedStateFromProps(nextProps) {
    let data = []
    if (nextProps.cannon.cannonProducts) {
      data.push(nextProps.cannon.cannonProducts)
    }
    console.log(data, "%%%%%%%")
    return {
      cannonProducts: data
    }
  }
  onDisplay = () => {
    if (this.state.cannonProducts.length !== 0) {
      var Products = this.state.cannonProducts[0];
      let value = Products[0];
      return value !== undefined ? value.productName : ""
    } else {
      return
    }

  }
  onQuestions = () => {
    if (this.state.cannonProducts.length > 0) {
      console.log("Clickeddd")
      var data = this.state.cannonProducts[0];
      let value1 = data[0];
      this.setState({
        questions: value1.questions
      });
    }
    else {
      return
    }
  };
  handleChange = (e, value, type) => {
    var questions = this.state.questions;
    // console.log(questions);
    console.log(e, value, type);
    if (type === "yes") {
      questions.forEach(data => {
        if (data.question === value) {
          console.log(data.answer.label,"yupp")
          data.options[1].label = "Yes";
          data.options[1].value = 1;
          data.isChecked.optionYesChecked = true;
          data.isChecked.optionNoChecked = false;
        }
      });
    } else if (type === "no") {
      questions.forEach(data => {
        if (data.question === value) {
          console.log(data.options,"nopee")
          data.options[0].label = "No";
          data.options[0].value = 0;
          data.isChecked.optionNoChecked = true;
          data.isChecked.optionYesChecked = false;
        }
      });
    }
    this.setState({
      questions
    });
  };
  edit = () => {
    this.setState({
      editMode: true
    });
  };
  save=()=>{
    this.setState({
editMode:false
    });
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
              color: "orange",
              display: "inline-block"
            }}
          >
            {this.onDisplay()}
          </h1>
        </div>
        <div style={{ padding: 40 }}>
          <Grid>
            <Grid.Row>
              <Grid.Column >
                <Button
                  label={
                    <Label size="medium" color="green" style={{ cursor: "pointer" }} >
                      Products
                     </Label>
                  }
                  value="Products"
                  style={{ marginLeft: 15 }}
                  onClick={this.onQuestions}
                />
              </Grid.Column>
              {this.state.questions.length > 0
                ? <Grid.Column
                    floated="right"
                    style={{ right: 50, marginTop: 25 }}
                  >
                    {this.state.editMode === false &&
                      <Button color="teal" onClick={this.edit}>
                        Edit
                      </Button>}
                    {this.state.editMode === true &&
                      <Button color="facebook" onClick={this.save}>
                        Save
                      </Button>}
                  </Grid.Column>
                : null}
            </Grid.Row>
          </Grid>
        </div>
        {this.state.questions.length > 0
          ? <div style={{ padding: 20 }}>
            <Card style={{ width: "100%" }}>
              <Card.Content>
                <Form.Field>
                  <Grid>
                    {this.state.questions.map(data => {
                      return (
                        <Grid.Row>
                          <Grid.Column
                            width={8}
                            style={{ display: "inline-block" }}
                          >
                            {data.question}
                            {/* <Button
                    label={
                    <Label size="medium" color="red" style={{ cursor: "pointer" }} >
                      questions
                     </Label>
                  }
                    value="questions"
                     onClick={this.handleChange}
                    /> */}
                          </Grid.Column>
                          {data.answerType === "options" &&
                            <Grid.Column
                              width={8}
                              style={{ display: "inline-block" }}
                            >
                              <div style={{ display: "inline-block" }}>
                                <Checkbox
                                  radio
                                  label="Yes"
                                  value="yes"
                                  checked={data.isChecked.optionYesChecked}
                                  disabled={
                                    this.state.editMode === true
                                      ? false
                                      : true
                                  }
                                  onChange={() => {
                                    this.handleChange(
                                      data.isChecked.optionYesChecked,
                                      data.question,
                                      "yes"
                                    );
                                  }}

                                />
                              </div>
                              <div style={{ display: "inline-block", marginLeft: 30 }}>
                                <Checkbox
                                  radio
                                  label="No"
                                  value="no"
                                  checked={data.isChecked.optionNoChecked}
                                  disabled={
                                    this.state.editMode === true
                                      ? false
                                      : true
                                  }
                                  onChange={() => {
                                    this.handleChange(
                                      data.isChecked.optionNoChecked,
                                      data.question,
                                      "no"
                                    );
                                  }}

                                />
                              </div>

                            </Grid.Column>}
                        </Grid.Row>
                      );
                    })}
                  </Grid>
                </Form.Field>
              </Card.Content>
            </Card>
          </div>
          : null}
      </div>
    );
  }

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
      fetchCannonProductAction
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CannonProduct)
);