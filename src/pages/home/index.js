import React from 'react';
import NavBar from '../navbar';
import './css/index.css'

import "semantic-ui-css/semantic.min.css";

import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpeg"
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"

import {
    Container,
    Grid,
    Header,
    Image,
    Segment
} from "semantic-ui-react";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { first_name, last_name, age, gender, email } = this.props.user_details
        return (

            <div >
                <NavBar />


                <Container>
                    <Segment vertical>
                        <Grid container stackable textAlign="center" columns={3}>
                            <Grid.Column>
                                <Image
                                    centered
                                    circular
                                    width="200"
                                    height="200"
                                    src={img1}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Image
                                    centered
                                    circular
                                    width="200"
                                    height="200"
                                    src={img2}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Image
                                    centered
                                    circular
                                    width="200"
                                    height="200"
                                    src={img3}
                                />

                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Segment vertical>
                        <Grid stackable>
                            <Grid.Column width={10}>
                                <Header as="h1">
                                    Hey {this.props.user_details.first_name},  {"     "}
                                    <span className="sub">Welcome to Clinify</span>
                                </Header>
                                <p>
                                    Clinify is your companion in these difficult times. You can easily book an appointment <i>anytime, anywhere</i>.
                                        It's now just one click away
                                    </p>
                                <p>
                                    So what are you waiting for, get started now only. Have a <b>safe</b> time ...
                                    </p>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Image src={img4} circular height="200" width="200" />
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Segment vertical>
                        <Grid stackable>
                            <Grid.Row width={10}>
                                <Header as="h1">
                                    About You ...
                                    </Header>

                            </Grid.Row>
                        </Grid>
                        <Grid stackable>
                            <Grid.Row width={10}>
                                <Grid.Column width={2}>
                                    <h2>Name : </h2>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <h2><i>{first_name}{` `}{last_name}</i></h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row width={10}>
                                <Grid.Column width={2}>
                                    <h2>Age : </h2>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <h2><i>{age}</i></h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row width={10}>
                                <Grid.Column width={2}>
                                    <h2>Gender :</h2>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <h2><i>{gender}</i></h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row width={10}>
                                <Grid.Column width={2}>
                                    <h2>Email :</h2>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <h2><i>{email}</i></h2>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>


                </Container>
            </div>



        );
    }
}

export default Home;
