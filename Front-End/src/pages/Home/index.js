import React, { Component } from "react";

import * as INDEX_CONSTANTS from "~/App/apis";
import funcLoadJs from "~/App/constants/loadJS";
import Header from "~/components/Header";
import BestTour from "~/components/Tour/BestTours";
import ServiceSection from "~/components/ServiceSection";
import HappyTravelerSays from "~/components/HappyTravelerSay";
import RecentStories from "~/components/RecentStories";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    fetch = async () => {
        funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
    };
    componentWillMount() {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        this.fetch();
    }

    renderBoard() {
        let xhtml = null;
        return xhtml;
    }

    handleCloseForm = () => {
        this.setState({});
    };

    render() {
        return (
            <>
                <Header />
                <BestTour />
                <HappyTravelerSays />
                <ServiceSection />
                <RecentStories />
            </>
        );
    }
}

export default Home;
