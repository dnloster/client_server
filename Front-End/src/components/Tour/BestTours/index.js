import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Button } from "antd";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import * as tourActions from "~/redux/actions/tourAction";
import { DATE_TIME_FORMAT } from "~/App/apis";
import BestTourItem from "./BestTourItem";
import "./index.scss";

const dateFormat = "lll";

class BestTour extends Component {
    state = { haveData: false, size: "default" };

    fetch = async () => {
        const { tourAllActions } = this.props;
        const {
            fetchListTourRequest,
            fetchListTourImageRequest,
            fetchTourByTimeRequest,
        } = tourAllActions;
        await fetchListTourImageRequest();
        await fetchTourByTimeRequest(
            moment().format(DATE_TIME_FORMAT.YEAR_MONTH_DATE)
        );
        await fetchListTourRequest();
    };

    componentWillMount() {
        const { listTour } = this.props;
        this.fetch();
        this.setState({
            listTour,
            haveData: true,
            size: window.innerWidth > 757.98 ? "default" : "small",
        });
    }

    renderBestTours() {
        let result = null;
        const { listTour, listImageTour } = this.props;
        if (this.state.haveData === true) {
            result = listTour.map((tour, index) => {
                let listImageTourDetail = listImageTour.filter(
                    (imageTour) => imageTour.idTour === tour.idTour
                );
                tour.departureDay = moment(tour.departureDay).format(
                    dateFormat
                );
                return (
                    <SwiperSlide key={index}>
                        <BestTourItem
                            tour={tour}
                            listImageTourDetail={listImageTourDetail}
                        />
                    </SwiperSlide>
                );
                // if (index < 8)
                // else return <></>;
            });
        } else {
            result = <div>Kh??ng c?? d??? li???u</div>;
        }
        return result;
    }

    render() {
        return (
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-1 ht-more-container">
                        <Link className="ht-more" to="tour">
                            <Button type="dashed">Xem th??m...</Button>
                        </Link>
                        <div className="col-md-12 heading-section text-center ">
                            <h2 className="mb-1">Nh???ng TOUR h??ng ?????u</h2>
                            <p>
                                "Ai c??ng ph???i ??i du l???ch ????? h???c h???i" ??? Mark
                                Twain
                            </p>
                        </div>
                    </div>
                    <div
                        className="list-best"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            marginLeft: "-10px",
                            marginTop: "2rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <Swiper
                            grabCursor={true}
                            spaceBetween={10}
                            slidesPerView={"auto"}
                        >
                            {this.renderBestTours()}
                        </Swiper>
                    </div>
                </div>
            </section>
        );
    }
}

BestTour.propTypes = {
    classes: PropTypes.object,
    tourAllActions: PropTypes.shape({
        fetchListTourRequest: PropTypes.func,
        fetchListTourImageRequest: PropTypes.func,
        fetchTourByTimeRequest: PropTypes.func,
    }),
    listTour: PropTypes.array,
    listImageTour: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        listTour: state.tour.listTour,
        listImageTour: state.tour.listImageTour,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        tourAllActions: bindActionCreators(tourActions, dispatch),
        //B??n tr??i ch??? l?? ?????t t??n th??i, b??n ph???i l?? tourActions ??? b??n tour.action.js
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BestTour);
