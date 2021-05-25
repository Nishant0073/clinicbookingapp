import React from 'react';

import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import Appointment from './pages/appointment';
import Auth from './pages/auth';
import Home from './pages/home';
import Landing from './pages/landing';
import NavBar from "./pages/navbar"




class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Route exact path="/"> 
                        <Redirect to="/register" />
                    </Route>
                    <Route path="/home" exact render={()=><Home />} />
                    <Route path="/appointment" exact render={()=><Appointment />} />
                    <Route path="/auth" exact render={()=> <Auth />} />
                    <Route path="/register" exact render={()=> <Landing />} />
                </Router>
            </div>
        );
    }
}

export default App;
