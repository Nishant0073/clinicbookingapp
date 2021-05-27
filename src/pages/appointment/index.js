import React from "react";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import NavBar from "../navbar";
import './index.css';

import axios from "axios";
import { apiBook } from "../../urls";

const hospitalOptions = [
    { key: 'd', text: 'DLF Hospital', value: 'dlf' },
    { key: 'a', text: 'AIIMS Indrapraastha', value: 'aiims' },
    { key: 'f', text: 'Fortis Hospital', value: 'fortis' },
    { key: 'c', text: 'Central Hospital', value: 'central' },
]
const dateOptions = [
    { key: 'tod', text: 'Today', value: 'today' },
    { key: 'tom', text: 'Tomorrow', value: 'tomorrow' },
    { key: 'dat', text: 'Day After Tomorrow', value: 'dayAfter' },
    { key: 'l', text: 'Later', value: 'later' },
]

const timeOptions = [
    { key: 't1', text: '10 am to 11 am', value: '10 am to 11 am' },
    { key: 't2', text: '11 am to 12 noon', value: '11 am to 12 noon' },
    { key: 't3', text: '12 noon to 1 pm', value: '12 noon to 1 pm' },
    { key: 't4', text: '4 pm to 5 pm', value: '4 pm to 5 pm' },
    { key: 't5', text: '5 am to 6 pm', value: '5 pm to 6 pm' },
    { key: 't6', text: '6 noon to 7 pm', value: '6 pm to 7 pm' },
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

    book = () => {
        axios.post(`${apiBook()}`,
            {
                username: this.props.user_details.username,
                ailment: this.state.ailment,
                hospital: this.state.hospital,
                date: this.state.date,
                time: this.state.time,
            }
        ).then(
            res => {
                console.log(res)
                alert("Appointment Booked Successfully")
            }
        ).catch(
            err => {
                console.log(err)
                alert("Appointment Could't Be Booked")
            }
        )
    }
    handleClick() {
         console.log(
            "ailment : " + this.state.ailment +
            "\ndate : " + this.state.date +
            "\ntime : " + this.state.time +
            "\nhospital : " + this.state.hospital+
            "\nusername : " + this.props.user_details.username
        )

        this.book()

        this.setState({
            ailment:'',
            hospital:'',
            date:'',
            time:'',
        })
    }
    handleAilmentChange(event) {
        this.setState({
            ailment: event.target.value
        })
    }
    handleDateChange(event, { value }) {
        this.setState({
            date: value
        })
    }
    handleTimeChange(event, { value }) {
        this.setState({
            time: value
        })
    }
    handleHospitalChange(event, {value}) {
        this.setState({
            hospital: value
        })
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
                                            options={hospitalOptions}
                                            value={this.state.hospital}
                                            placeholder='Choose Hospital'
                                            onChange={this.handleHospitalChange}
                                        />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Select
                                            fluid
                                            options={dateOptions}
                                            value={this.state.date}
                                            placeholder='Choose Appointment Date'
                                            onChange={this.handleDateChange}
                                        />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Select
                                            fluid
                                            options={timeOptions}
                                            value={this.state.time}
                                            placeholder='Time'
                                            onChange={this.handleTimeChange}
                                        />

                                    </Form.Group>

                                    <Button type="reset" color='blue' fluid size='large' onClick={this.handleClick}>
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