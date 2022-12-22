import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

import * as tourActions from "~/redux/actions/tourAction";
import SearchEngine from "../SearchEngine";
import { DATE_TIME_FORMAT } from "~/App/apis";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlideItem from "./heroSlideItem";
import SwiperCore, { Autoplay } from "swiper";

const dateFormat = "lll";

class Header extends Component {
    state = {
        size: 0,
        haveData: false,
    };

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
            size: window.innerWidth > 767.98 ? "large" : "default",
        });
    }

    renderSliderTour() {
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
                        {({ isActive }) => (
                            <HeroSlideItem
                                tour={tour}
                                listImageTourDetail={listImageTourDetail}
                                className={`${isActive ? "active" : ""}`}
                            />
                        )}
                    </SwiperSlide>
                );
            });
        } else {
            result = <div>No data found</div>;
        }
        return result;
    }

    render() {
        SwiperCore.use([Autoplay]);
        return (
            <div
                className="ht-header"
                style={{ height: window.innerHeight, maxHeight: "700px" }}
            >
                <div className="hero-slide">
                    <Swiper
                        modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                    >
                        {this.renderSliderTour()}
                    </Swiper>
                </div>
                <SearchEngine />
            </div>
        );
    }
}

Header.propTypes = {
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
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
