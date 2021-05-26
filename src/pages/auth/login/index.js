import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from "axios"
import { apiLogin, apiSignUp } from "../../../urls"
import { routeHome } from "../../../urls"
import { Redirect, Router } from 'react-router'
import Home from '../../home'
class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginStatus: null,
      userInfo: null,
    }
  }
  login = () => {
    axios.post(`${apiLogin()}`, {
      username: this.state.username,
      password: this.state.password,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message)
        this.setState({
          loginStatus: null,
        })
      }
      else {
        <Home userInfo={response.data.userInfo}/>
      }
    }).catch((err) => {
      alert("Backend server not yet running.")
    })
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='teal' fluid size='large'>
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