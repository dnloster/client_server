import React, { Component } from "react";
import { Link } from "react-router-dom";

import Subcribe from "./Subscribe";

export default class Footer extends Component {
    render() {
        return (
            <footer className="ftco-footer ftco-footer-2 ftco-section">
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-1">
                                <Link to="/" className="d-flex">
                                    <img
                                        src="/logo192.png"
                                        alt="Tours"
                                        className="ht-logo-nav"
                                    ></img>
                                    <h1
                                        className="text-center text-white d-inline-block pl-1"
                                        style={{ margin: 0 }}
                                    >
                                        TRAVELGO
                                    </h1>
                                </Link>
                                <Subcribe />
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-2">
                                    <li className="ftco-animate">
                                        <a
                                            href="https://github.com/dnloster"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="icon-github" />
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
                                        <a
                                            href="https://facebook.com/dnloster"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="icon-facebook" />
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
                                        <a
                                            href="https://www.linkedin.com/in/dnloster/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="icon-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-2">
                                <h2 className="ftco-heading-2 ht-no-p-m pb-2">
                                    Th??ng tin
                                </h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            H??nh th???c thanh to??n
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Ch??nh s??ch ho??n hu???
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            ??i???u kho???n s??? d???ng
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Ch??nh s??ch b???o m???t
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            B???n quy???n h??nh ???nh
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-2">
                                <h2 className="ftco-heading-2 ht-no-p-m pb-2">
                                    Danh m???c
                                </h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Du l???ch trong n?????c
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Du l???ch n?????c ngo??i
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            D???ch v???
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Tuy???n d???ng
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Tin t???c du l???ch
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="ftco-footer-widget mb-2">
                                <h2 className="ftco-heading-2 ht-no-p-m pb-2">
                                    Li??n h???
                                </h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li>
                                            <span className="icon icon-map-marker" />
                                            <span className="text">
                                                236 Hoang Quoc Viet
                                            </span>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <span className="icon icon-phone" />
                                                <span className="text">
                                                    +983 427 263
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <span className="icon icon-envelope" />
                                                <span className="text">
                                                    dnloster.pas@gmail.com
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
