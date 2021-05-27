import React from "react";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import NavBar from "../navbar";
import './index.css';
const options = [
    { key: 'd', text: 'DLF Hospital', value: 'dlf' },
    { key: 'a', text: 'AIIMS Indrapraastha', value: 'aiims' },
    { key: 'f', text: 'Fortis Hospital', value: 'fortis' },
    { key: 'c', text: 'Central Hospital', value: 'central' },
]

class Appointment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hospital: '',
            ailment: '',
            date: '',
            time: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleAilmentChange = this.handleAilmentChange.bind(this)
        this.handleHospitalChange = this.handleHospitalChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
    }
    handleClick() {

    }
    handleAilmentChange(event) {
        this.setState = {
            ailment: event.target.value
        }
    }
    handleDateChange() {

    }
    handleTimeChange() {

    }
    handleHospitalChange(event, { value }) {
        this.setState = {
            hospital: value
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="signup-container">
                    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 500 }}>
                            <Header as='h2' color='black' textAlign='center'>
                                Book an appointment
                        </Header>
                            <Form inverted size='large'>
                                <Segment inverted stacked>
                                    <Form.Group widths='equal'>
                                        <Form.TextArea fluid placeholder='Specify your ailment' onChange={this.handleAilmentChange} />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Select
                                            fluid
                                            options={options}
                                            value={this.state.hospital}
                                            placeholder='Hospital'
                                            onChange={this.handleHospitalChange}
                                        />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <input id="date-input" type="date" fluid>
                                        </input>
                                    </Form.Group>
                                    <Button type="reset" color='teal' fluid size='large' onClick={this.handleClick}>
                                        Book your appointment
                                    </Button>
                                    <br />
                                    <i className="alert-message">All fields are compulsary</i>
                                </Segment>
                            </Form>

                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Appointment;