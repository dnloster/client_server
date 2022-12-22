import React, { Component } from "react";

import Register from "~/components/Register";
import * as INDEX_CONSTANTS from "~/App/apis/index";
import funcLoadJs from "~/App/constants/loadJS";

export default class RegisterPage extends Component {
    componentWillMount() {
        funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
    }
    render() {
        return (
            <section className="ftco-section">
                <div className="container justify-content-center">
                    <div className="row justify-content-center pb-1">
                        <div className="ftco-animate col-lg-5">
                            <Register />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
