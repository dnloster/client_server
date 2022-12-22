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
                                    Thông tin
                                </h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Hình thức thanh toán
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Chính sách hoàn huỷ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Điều khoản sử dụng
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Chính sách bảo mật
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Bản quyền hình ảnh
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-2">
                                <h2 className="ftco-heading-2 ht-no-p-m pb-2">
                                    Danh mục
                                </h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Du lịch trong nước
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Du lịch nước ngoài
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Dịch vụ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Tuyển dụng
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block">
                                            Tin tức du lịch
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="ftco-footer-widget mb-2">
                                <h2 className="ftco-heading-2 ht-no-p-m pb-2">
                                    Liên hệ
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
