import React, { Component } from "react";

import ForgotPassword from "~/components/ForgotPassword";
import * as INDEX_CONSTANTS from "~/App/apis/index";
import funcLoadJs from "~/App/constants/loadJS";

class ForgotPasswordPage extends Component {
    componentWillMount() {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
    }

    render() {
        return (
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-1 mt-4">
                        <ForgotPassword />
                    </div>
                </div>
            </section>
        );
    }
}

export default ForgotPasswordPage;
