import React from 'react';

import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import Appointment from './pages/appointment';
import Home from './pages/home';
import NavBar from "./pages/navbar"
import LoginForm from './pages/auth/login';
import SignUpForm from './pages/auth/signup';
import axios from 'axios';
import Logout from './pages/auth/logout';

import { apiVerify } from './urls'
import Routing from './pages/routing';

import Cookies from 'js-cookie'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login_status: null,
            session_id: null,
        }
    }


    render() {

        if (Cookies.session_id == null) {
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

                        <Route path="/" exact render={() => <Home />} />
                        <Route path="/appointment" exact render={() => <Appointment />} />
                        <Route path="/logout" exact render={() => <Logout />} />

                    </Router>
                </div>
            );
        }

    }
}

export default App;
