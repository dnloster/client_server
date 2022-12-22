import React, { Component } from "react";
import moment from "moment";
import { Rate, Statistic } from "antd";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

import Button from "~/components/Button";
import * as INDEX_CONSTANT from "~/App/apis";
import replaceImg from "~/App/assets/img/replace.jpg";
import "./index.scss";

const { Countdown } = Statistic;
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default class BestTourItem extends Component {
    render() {
        const { tour, listImageTourDetail } = this.props;

        return (
            <div className="tour-card">
                <div className="card-image">
                    {listImageTourDetail.length ? (
                        <img
                            src={
                                INDEX_CONSTANT.API_ENDPOINT +
                                listImageTourDetail[0].url
                            }
                            alt=""
                            className="tour-image"
                        />
                    ) : (
                        <img src={replaceImg} alt="" className="tour-image" />
                    )}
                    <div className="add-fav absolute top-1 left-4 p-[5px] rounded-[8px] bg-[rgba(0,0,0,.1)] leading-5 cursor-pointer">
                        {/* <FontAwesomeIcon
                            icon={faHeart}
                            className="w-[20px] h-[20px] text-base text-white hover:text-red-500 duration-300"
                        /> */}
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-top">
                        <div className="time-remaining">
                            <span className="flex items-center">
                                {moment(tour.departureDay).format(
                                    INDEX_CONSTANT.DATE_TIME_FORMAT
                                        .DATE_MONTH_YEAR
                                )}
                                {" -  "}
                                <Countdown
                                    value={tour.departureDay}
                                    format="D Ngày"
                                    className="text-base"
                                />
                            </span>
                        </div>
                        <div className="card-title">
                            <Link
                                to={{
                                    pathname: `/tour-single/${tour.idTour}`,
                                    state: {
                                        tour: tour,
                                    },
                                }}
                            >
                                {tour.titleTour}
                            </Link>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="departure-place">
                            Nơi khởi hành: <span>{tour.departureAddress}</span>
                        </div>
                        <div className="old-price">
                            Giá:{" "}
                            <span className="line-through">
                                <NumberFormat
                                    value={tour.price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" đ"}
                                />
                            </span>
                        </div>
                        <div className="sale-price">
                            <NumberFormat
                                value={
                                    tour.price - (tour.price * tour.sale) / 100
                                }
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" đ"}
                            />
                            <NumberFormat
                                value={tour.sale}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={"% GIẢM"}
                            />
                        </div>
                        <div className="rate">
                            <Rate
                                allowHalf
                                tooltips={desc}
                                disabled
                                defaultValue={tour.votes}
                                size="small"
                                className="mr-1 height-40"
                            />
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="time-travel">{tour.vocationTime}</div>
                        <Button>
                            <Link
                                to={{
                                    pathname: `/book-tour/${tour.idTour}`,
                                    state: {
                                        tour: tour,
                                    },
                                }}
                            >
                                Đặt ngay
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
