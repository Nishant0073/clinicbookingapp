import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import Appointment from '../appointment';
import Logout from '../auth/logout';
import NavBar from '../navbar';

class Home extends React.Component {
    render() {

        return (
            <div>
                <NavBar />
                
                <div>
                    Home Page
                </div>

            </div>


        );
    }
}

export default Home;
