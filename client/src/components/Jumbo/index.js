
import React from "react";
import {Jumbotron} from "react-bootstrap";
import Logo from "../../images/booktionary_logo_light.png";
import "./style.css";

function Jumbo() {
    return (
        <Jumbotron className="bg-dark text-secondary">
            <h1 className="text-center">
                <img className="logo" src={Logo} alt="Booktionary" />
            </h1>
            <h2 className="text-center">
                Search and Save books from google 
            </h2> 
        </Jumbotron>
    )
}

export default Jumbo;