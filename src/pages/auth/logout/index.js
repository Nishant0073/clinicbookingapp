import React from 'react'
import { Loader } from 'semantic-ui-react'
import axios from "axios"
import { apiLogout } from "../../../urls"

import { getCookie } from '../../../utils'
class Logout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded: null
        }
    }
    componentDidMount() {
        axios.post(`${apiLogout()}`, {
            session_id: getCookie("session_id")
        }).then(
            res => {
                console.log(res)
                window.location = "/"
            }
        ).catch(
            err => {
                console.log(err)
                alert("Couldn't Log Out")
            })
    }

    render() {
        if (!this.state.loaded) {
            return (
                <Loader active />
            );
        }


    }
}

export default Logout