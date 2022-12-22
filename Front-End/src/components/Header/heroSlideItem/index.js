import React, { Component } from "react";
import { Button, Tag, Statistic } from "antd";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

import { API_ENDPOINT } from "~/App/apis";
import replaceImg from "~/App/assets/img/replace.jpg";

const { Countdown } = Statistic;

class HeroSlideItem extends Component {
    render() {
        const { className, listImageTourDetail, tour } = this.props;
        return (
            <div className={`hero-slide_item ${className}`}>
                <div
                    className="hero-wrap js-fullheight"
                    style={{
                        maxHeight: "700px",
                        height: window.innerHeight,
                        backgroundImage: listImageTourDetail.length
                            ? `url('${
                                  API_ENDPOINT + listImageTourDetail[0].url
                              }')`
                            : `url('${replaceImg}')`,
                    }}
                    data-stellar-background-ratio="0.5"
                >
                    <div className="container">
                        <div
                            className="row no-gutters slider-text js-fullheight align-items-top justify-content-end"
                            data-scrollax-parent="true"
                        >
                            <div
                                className="col-md-12 mt-5"
                                data-scrollax=" properties: { translateY: '70%' }"
                            >
                                <h1
                                    className="mb-4 mt-5"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                >
                                    {tour.titleTour}
                                </h1>

                                <p
                                    className="mb-1 ht-header-descript"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                >
                                    {tour.describe}
                                    <Link
                                        to={`/tour-single/${tour.idTour}`}
                                        className="ht-slider-link"
                                    >
                                        {" xem thêm!"}
                                    </Link>
                                </p>
                                <div className="ht-display-flex-space-between-center ht-pd-t-2">
                                    <p className="ht-p-500 ht-no-p-m">
                                        <NumberFormat
                                            value={tour.price}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"Giá từ "}
                                            suffix={"Đ"}
                                        />
                                    </p>
                                    {tour.sale > 0 && (
                                        <div className="ht-header-sale ht-display-flex-center-center">
                                            <p className="ht-p-500">
                                                <i className="fas fa-piggy-bank"></i>{" "}
                                                {this.size === "large"
                                                    ? "Giảm ngay "
                                                    : ""}
                                                <NumberFormat
                                                    value={(
                                                        tour.price *
                                                        tour.sale *
                                                        0.01
                                                    ).toFixed(1)}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    suffix={"Đ"}
                                                />
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="ht-display-flex-space-between-center ht-pd-t-1">
                                    <div className="ht-countdown-container ht-display-flex-center-center">
                                        <Countdown
                                            className="ht-countdown"
                                            value={tour.departureDay}
                                            format="D Ngày H Giờ m Phút s Giây"
                                        />
                                    </div>
                                    <Button type="primary" size={this.size}>
                                        ĐẶT NGAY
                                    </Button>
                                </div>
                                <div className="ht-header-tag-container ht-display-flex-start-center ht-mr-t-3">
                                    {tour.tags &&
                                        tour.tags !== "undefined" &&
                                        JSON.parse(
                                            tour.tags.replace(/'/g, '"')
                                        ).map((tag, index) => (
                                            <Tag color="#87d068" key={index}>
                                                {"# "}
                                                {tag}
                                            </Tag>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSlideItem;
