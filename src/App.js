import React from 'react';

import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import Appointment from './pages/appointment';
import Home from './pages/home';
import LoginForm from './pages/auth/login';
import SignUpForm from './pages/auth/signup';
import axios from 'axios';
import Logout from './pages/auth/logout';

import { apiVerify } from './urls'
import { getCookie } from './utils'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login_status: false,
            user_details:null,
        }
    }
    componentDidMount() {
        axios.post(
            `${apiVerify()}`,
            {
                session_id: getCookie("session_id")
            }

        ).then(
            result => {
                this.setState({
                    login_status:true,
                    user_details: result.data.user_details
                })
                console.log(result.data.user_details)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }user_details
    render() {
        if (this.state.login_status == false) {

            return (
                <Router>
                    <Route path="/" exact render={() => <LoginForm />} />
                    <Route path="/signup" exact render={() => <SignUpForm />} />
                </Router>
            );
        }
        else {
            return (
                <div>
                    <Router>

                        <Route path="/" exact render={() => <Home user_details={this.state.user_details}/>} />
                        <Route path="/appointment" exact render={() => <Appointment user_details={this.state.user_details} />} />
                        <Route path="/logout" exact render={() => <Logout />} />

                    </Router>
                </div>
            );
        }

    }
}

export default App;
