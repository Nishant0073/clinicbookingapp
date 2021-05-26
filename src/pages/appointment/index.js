
import React from "react";
import { Grid} from 'semantic-ui-react'
import styles from './style.css';

class Appointment extends React.Component {
    render() {
        return(
            <form class="ui form" action="/">
                <Grid verticalAlign='middle' columns={3} centered>
                    <Grid.Row>
                        <Grid.Column>
                            <div>
                                <h1 class="ui header">Request an Appointment</h1>
                                <div class="ui divider"/>
                            </div>
                            <div>
                                <h4 class="ui header">Mention Symptoms:</h4>
                                <input type="text" name="symptons" placeholder="Faver.."/>
                            </div>
                            <div class="ui hidden divider"/>
                            <div>
                                <div class="ui checked checkbox">
                                    <h4>
                                        <input type="checkbox" checked=""/>
                                        <label>First Time Visit?</label>
                                    </h4>
                                </div>
                                <div class="ui hidden divider"/>
                            </div>
                            <div>
                                <h4>Select an Appointment Date:</h4>
                                <input id="" type="date" name="" />
                            </div>
                            <div class="ui hidden divider"/>

                        </Grid.Column>
                    </Grid.Row>
                    <button class="ui button" type="submit">Submit</button>
                </Grid>
            </form>
        );
    }
}

export default Appointment;


