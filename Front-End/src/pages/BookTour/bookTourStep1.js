import React, { Component } from "react";

import TourDetail from "~/pages/Tour/TourDetail";
import * as INDEX_CONSTANTS from "~/App/apis/index";
import funcLoadJs from "~/App/constants/loadJS";

export default class bookTourStep1 extends Component {
    //step 1: check product

    componentDidUpdate() {
        funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
    }
    render() {
        const { tourById, listImageByIdTour, departureDay } = this.props;
        return (
            <TourDetail
                tour={tourById}
                listImageTour={listImageByIdTour}
                bookTour={true}
                departureDay={departureDay}
            />
        );
    }
}
