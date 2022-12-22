import React, { Component } from "react";

import AboutTraveland from "~/components/AboutTraveland";
import * as INDEX_CONSTANTS from "~/App/apis/index";
import funcLoadJs from "~/App/constants/loadJS";
import Contact from "./Contact";

export default class About extends Component {
    componentDidMount() {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
    }
    render() {
        return (
            <>
                <div className="mb-5"></div>
                <AboutTraveland />
                <Contact />
            </>
        );
    }
}
