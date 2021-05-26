import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from "axios"
import { apiLogin, apiSignUp } from "../../../urls"
import { routeHome } from "../../../urls"
import { Redirect, Router } from 'react-router'
import Home from '../../home'
import Routing from '../../routing'
class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginStatus: null,
      userInfo: null,
      userSessionId:null,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }
  login = () => {
    axios.post(`${apiLogin()}`, {
      username: this.state.username,
      password: this.state.password,
    }).then((response) => {
      console.log(response)
      if (response.data.message) {
        console.log(response.data.message)
        alert("User doesn't exist")
      }
      else {
        this.setState({
          userSessionId: response.data.session_id,
        })
        alert("User logged in successfully")
        // window.location = `${routeHome()}`+"home"
        this.setState({
          loginStatus: true
        })
        document.cookie  = `session_id=${response.data.session_id}`
        console.log("s_id ", response.data.session_id)
      }
    }).catch((err) => {
      alert("User not found")
    })
  }

  handleClick() {
    console.log(" username : "+this.state.username+"\n password : "+this.state.password)
    this.login()
  }
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  render() {
    if(this.state.loginStatus){
      <Routing />
    }
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={this.handleUsernameChange} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={this.handlePasswordChange}
              />

              <Button color='teal' fluid size='large' onClick={this.handleClick}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href={`${routeHome()}` + "signup"}>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm