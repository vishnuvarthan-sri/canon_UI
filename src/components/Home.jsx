import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Dropdown, Checkbox } from 'semantic-ui-react'
import CannonIndex from './cannon/cannonIndex.jsx'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      menu: "cannon",
       message:"",
    };
  }
togglebar=(e)=>{
  this.setState({
    visible:!this.state.visible
  })

}
handleClick = (e) => {
this.setState({
message:"CANNON"
});
}
handleClick2 = (e) => {
  this.setState({
  message:"GAMEPAD"
  });
  }

// display =()=>{
//   var message =this.state.message;
//   message.map((top,index)=>{
//     <div key={index}>
//       <p style={{ textAlign:'center' }}><b>{top}</b></p>
//     </div>
//   }
//   )
  
// }

//   handleItemClick= (e,{name})  => {
//  console.log(name)
//     // this.props.history
//     var messsage ="hello"
//     this.setState=({
//       message:messsage,
//     });
//   }

  render() {
    var activeItem = this.state.menu;
    var pusherStyle = { height: "100%", overflow: "auto", width: "85%" };
    if(!this.state.visible){
      pusherStyle.width ="100%"
    }
    return (
      <div style={{height:"100%"}}>
        <Segment raised style={{ backgroundColor: "#fafafa", height: 60 }}>
          <div style={{ display: "inline-block" }}>
            <Icon
              style={{
                display: "inline-block",
                cursor: "pointer",
                float: "left",
                color: "#606060",
                marginTop: 4
              }}
              onClick={this.togglebar}
              size="big"
              name="bars"
            />
          </div>
         
        </Segment>
        <Sidebar.Pushable as={Segment}
          style={{
            marginTop: -15,
            display: "flex",
            borderRadius: 0,
            height: "200%"
          }}>
          <Sidebar
            as={Menu}
            visible={this.state.visible}
            activeIndex="0"
            style={{
              flex:"0 0 150px",
              backgroundColor: "#2c3e50",
              paddingTop: 30
            }}
            animation="slide along"
            width="thin"
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item
              name="cannon"
              active={activeItem === "cannon"}
              color="teal"
              onClick={this.handleClick}
              style={{ marginTop: 5 }}
            >
              <Icon name="camera" />
            Cannon
         </Menu.Item>
         <Menu.Item
              name="gamepad"
              active={activeItem === "gamepad"}
              color="teal"
              onClick={this.handleClick2}
              style={{ marginTop: 5 }}
            >
              <Icon name="gamepad" />
            Gamepad
         </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher  style={pusherStyle} >

            <Segment basic
                style={{
                height: "100%",
                display: "flex",
                padding: "10px 0px 0px 0px"
              }}  
            >
            {/* <div style={{ paddingLeft: 650,paddingBottom:200, flex: "0 0 450px" }}>
           <p style={{ textAlign:'center' }}> <b>{this.state.message}</b></p> 
           </div> */}
              {activeItem === "cannon" && <CannonIndex />}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}


