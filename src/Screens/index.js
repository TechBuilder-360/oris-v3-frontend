import React, {Component} from 'react';
import Preauth from "../Components/navigation/preauth";
import "./index.css"
import Images from "../assets/images";
import {Button} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <Preauth/>
                <div className={"dashboard"}>
                    <Button>Get Started</Button>
                </div>
            </div>
        );
    }
}

export default Home;
