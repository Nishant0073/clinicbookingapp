import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


export default class NavBar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (

      <div className="Nav">
        <Menu secondary className="menu">

          <Menu.Item
            as={NavLink} exact to="/"
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={NavLink} exact to="/appointment"
            name='Book Appointment'
            active={activeItem === 'appointment'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position='right'>
            <Menu.Item
              as={NavLink} exact to="/logout"
              name='logout'
              active={activeItem === 'logout'}
            />
          </Menu.Menu>

        </Menu>
      </div>
    )
  }
}

