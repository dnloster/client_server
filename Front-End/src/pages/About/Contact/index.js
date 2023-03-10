import React, { Component } from "react";

import * as INDEX_CONSTANTS from "~/App/apis/index";
import funcLoadJs from "~/App/constants/loadJS";

export default class Contact extends Component {
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
                <section className="ftco-section ftco-no-pb contact-section">
                    <div className="container">
                        <div className="row d-flex contact-info">
                            <div className="col-md-3 d-flex">
                                <div className="align-self-stretch box p-4 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="icon-map-signs" />
                                    </div>
                                    <h3 className="mb-4">Address</h3>
                                    <p>
                                        236 Hoàng Quốc Việt, Bắc Từ Liêm, Hà Nội
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="align-self-stretch box p-4 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="icon-phone2" />
                                    </div>
                                    <h3 className="mb-4">Contact Number</h3>
                                    <p>
                                        <a href="tel://0983427263">
                                            +84 983 427 263
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="align-self-stretch box p-4 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="icon-paper-plane" />
                                    </div>
                                    <h3 className="mb-4">Email Address</h3>
                                    <p>
                                        <a href="mailto:dnloster.pas@gmail.com">
                                            dnloster.pas@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="align-self-stretch box p-4 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="icon-globe" />
                                    </div>
                                    <h3 className="mb-4">Website</h3>
                                    <p>
                                        <a href=" https://www.facebook.com/dnloster">
                                            facebook.com/dnloster
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section contact-section">
                    <div className="container">
                        <div className="row block-9">
                            <div className="col-md-6 order-md-last d-flex">
                                <form
                                    action="#"
                                    className="bg-light p-5 contact-form"
                                >
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols={30}
                                            rows={7}
                                            className="form-control"
                                            placeholder="Message"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            defaultValue="Send Message"
                                            className="btn btn-primary py-3 px-5"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="bg-white ht-d-flex-center-center">
                                    <h4>Vì sao nên chọn chúng tôi?</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
