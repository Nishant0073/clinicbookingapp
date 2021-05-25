import React from 'react';
import Auth from './pages/auth.js';
import Profile from './pages/profile.js';
import  Bookappointment  from './pages/bookappointment.js';
import Home from './pages/home.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <main>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/auth">Login/Logout</Link></li>
                        <li><Link to="/bookappoint">Book Appointment</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/bookappointment" exact component={Bookappointment}/>
                    <Route path="/auth"  component={Auth} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
