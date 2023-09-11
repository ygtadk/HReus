import React, { useEffect, Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { Variables } from "./Variables.js";

export class Personnels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // error: null,
            // isLoaded: false,
            personnels: []
        }
    }    

    refreshPersonnels() {
        fetch(Variables.API_URL_PERSONNELS)
            .then(response => response.json())
            .then(data=> {
                this.setState({personnels: data});
            });
    }

    componentDidMount() {
        this.refreshPersonnels();
    }

    render() {
        const {
            personnels
        }= this.state;

        return (
            <div>
                <h1>Personnels</h1>
                <p>Personnels</p>
                {personnels.map(personnel => (
                    <div key={personnel.id}>
                        <p>{personnel.id}</p>
                        <p>{personnel.name}</p>
                        <p>{personnel.surname}</p>
                        <p>{personnel.position}</p>
                    </div>
                ))}
            </div>
        );
    }
}
