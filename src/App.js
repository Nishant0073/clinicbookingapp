import React from 'react';

import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import Appointment from './pages/appointment';
import Home from './pages/home';
import NavBar from "./pages/navbar"
import LoginForm from './pages/auth/login';
import SignUpForm from './pages/auth/signup';




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login_status: null,
        }
    }

    render() {
        if (this.state.login_status == null) {
            return (
                <Router>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route path="/login" exact render={() => <LoginForm />} />
                    <Route path="/signup" exact render={() => <SignUpForm />} />                    
                </Router>
            );
        }
        else {
            return (
                <div>
                    <Router>
                        <NavBar />
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home" exact render={() => <Home />} />
                        <Route path="/appointment" exact render={() => <Appointment />} />
                        <Route path="/login" exact render={() => <LoginForm />} />
                        <Route path="/signup" exact render={() => <SignUpForm />} />
                    </Router>
                </div>
            );
        }

    }
}

export default App;
