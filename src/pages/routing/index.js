import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import { apiVerify } from '../../urls';
import Appointment from '../appointment';
import Logout from '../auth/logout';
import NavBar from '../navbar';

class Routing extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        axios.get(`${apiVerify}`).then(
            result => {
                console.log("Helo ", result)
                this.props.session_id = result.data.session_id
                this.props.login_status = true
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }
    render() {

        return (

            <div>
                <NavBar />

                <Router>
                    <Route path="/appointment" exact render={() => <Appointment />} />
                    <Route path="/logout" exact render={() => <Logout />} />
                </Router>
                <div>
                    Home Page
                    </div>

            </div>


        );
    }
}

export default Routing;
