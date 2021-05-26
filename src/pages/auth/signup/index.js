import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import "./css/index.css"
import { routeHome } from "../../../urls"

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]


class SignUpForm extends React.Component {

    render() {
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
                                    <Form.Input fluid placeholder='First Name' />
                                    <Form.Input fluid placeholder='Last Name' />
                                </Form.Group>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />
                                <Form.Group widths='equal'>
                                    <Form.Input fluid placeholder='Age' />
                                    <Form.Select
                                        fluid
                                        options={options}
                                        placeholder='Gender'
                                    />
                                </Form.Group>
                                <Button color='teal' fluid size='large'>
                                    Register
                        </Button>
                            </Segment>
                        </Form>
                        <Message>
                            Already registered? <a href={`${routeHome()}` + "login"}>Login Here</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default SignUpForm