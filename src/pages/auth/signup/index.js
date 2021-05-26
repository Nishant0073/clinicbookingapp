import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import "./css/index.css"
import { apiLogin, apiSignUp, routeHome } from "../../../urls"
import axios from 'axios'
import Home from '../../home'
import { Redirect } from 'react-router'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]


class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            age: '',
            gender: '',
            email:'',
            successfulSubmission: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.handleGenderChange = this.handleGenderChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
    }

    signup = () => {
        axios.post(`${apiSignUp()}`, {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            password: this.state.password,
            age: this.state.age,
            gender: this.state.gender,
            email: this.state.email,
        }).then((response) => {
            console.log(response)
            if (response.data.problem) {
                console.log(response.data.problem)
                this.setState({
                    loginStatus: null,
                })
                alert(response.data.problem)
                
            }
            else {
                alert("User successfully registered : " , response.data.message)
                window.location = `${routeHome()}`

            }
        }).catch((err) => {
            alert(err)

        })
    }

    handleClick() {
        console.log(
            "username : " + this.state.username + "\npassword : " + this.state.password +
            "\nname : " + this.state.first_name + " " + this.state.last_name +
            "\nage : " + this.state.age + "\ngender : " + this.state.gender +
            "\nemail : " +this.state.email
        )
        this.setState({
            gender: ''
        })
        this.signup()
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

    handleFirstNameChange(event) {
        this.setState({
            first_name: event.target.value
        })
    }

    handleLastNameChange(event) {
        this.setState({
            last_name: event.target.value
        })
    }

    handleAgeChange(event) {
        this.setState({
            age: event.target.value
        })
    }

    handleGenderChange(event, { value }) {
        this.setState({
            gender: value
        })

    }
    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    render() {
        if (this.state.successfulSubmission == true) {
            window.location = "http://localhost:3000/"
        }
        return (
            <div className="signup-container">
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            !! Welcome to Clinify !!
                        </Header>
                        <Header as='h3' color='blue' textAlign='center'>
                            <i>The one-step solution to healing</i>
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid placeholder='First Name' onChange={this.handleFirstNameChange} />
                                    <Form.Input fluid placeholder='Last Name' onChange={this.handleLastNameChange} />
                                </Form.Group>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={this.handleUsernameChange} />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handlePasswordChange}
                                />
                                <Form.Group widths='equal'>
                                    <Form.Input fluid placeholder='Age' onChange={this.handleAgeChange} />
                                    <Form.Select
                                        fluid
                                        options={options}
                                        value={this.state.gender}
                                        placeholder='Gender'
                                        onChange={this.handleGenderChange}
                                    />
                                </Form.Group>
                                <Form.Input fluid icon='chat' iconPosition='left' placeholder='Email' onChange={this.handleEmailChange} />
                                <Button type="reset" color='teal' fluid size='large' onClick={this.handleClick}>
                                    Register
                        </Button>
                        <br/>
                        <i className="alert-message">All fields are compulsary</i>
                            </Segment>
                        </Form>
                        
                        <Message>
                            Already registered? <a href={`${routeHome()}`}>Login Here</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default SignUpForm