import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import CannonStore from './cannonStore.jsx'

 class TabView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Audits"
    };
  }
  // handleItemClick = (e, { name }) => {
  //     if(name === "Audits"){
  //       this.setState({ activeItem: name });
        
  //     }
      
  // };
  render() {
    const { activeItem } = this.state;
    return (
      <div
      style={{
          flexGrow: 1,
          display: "flex",
          flexFlow: "column",
          justifyContent: "flex-start",
          padding: 5,
          //   backgroundColor: "green"
        }}>
        <div>
          <Menu pointing secondary widths={5}>
            <Menu.Item
              name="Audits"
              active={activeItem === "Audits"}
              // onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Dashboard"
              active={activeItem === "Dashboard"}
              // onClick={this.handleItemClick}
            />
            
          </Menu>
        </div>
        {activeItem === "Audits" &&  <CannonStore onClose={this.props.onClose}/>}
      </div>
    );
  }
}

export default TabView;



