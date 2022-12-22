import React, { Component } from "react";

import BestTourContainer from "~/components/Tour/BestTours";
import TourVideoGalleryContainer from "~/components/Tour/videoGallery";

import * as INDEX_CONSTANTS from "~/App/apis/index";
import funcLoadJs from "~/App/constants/loadJS";

export default class TourBest extends Component {
    componentDidMount() {
        funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
    }
    render() {
        return (
            <>
                <TourVideoGalleryContainer />
                <BestTourContainer />
            </>
        );
    }
}
