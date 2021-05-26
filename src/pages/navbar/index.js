import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
import "./index.css"


export default class NavBar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
 
    return (


      <Menu secondary>
        <Menu.Item
          as={NavLink} exact to ="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} exact to ="/appointment"
          name='Book Appointment'
          active={activeItem === 'appointment'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            as={NavLink} exact to ="/logout"
            name='logout'
            active={activeItem === 'logout'}
            // onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}


// CSS from Semantic UI React
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);