import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourActions from "~/redux/actions/tourAction";
import * as imageActions from "~/redux/actions/imageAction";
import BookTourContainer from "./bookTourContainer";

class BookTour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tourById: {},
            listImageByIdTour: [],
            haveData: false,
            departureDay: "",
        };
    }

    componentWillMount() {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        const { idTour } = this.props.match.match.params;
        const { departureDay } = this.props.match.location.state;

        const { tourAllActions, imageAllActions } = this.props;

        //load Tour byId
        const { fetchTourByIdRequest } = tourAllActions;
        fetchTourByIdRequest(idTour);

        //Load images with idTour
        const { fetchListImageByIdTourRequest } = imageAllActions;
        fetchListImageByIdTourRequest(idTour);

        const { tourById, listImageByIdTour, scheduleByIdTour } = this.props;
        this.setState({
            tourById,
            listImageByIdTour,
            scheduleByIdTour,
            haveData: true,
            departureDay,
        });
    }

    render() {
        const { tourById, listImageByIdTour } = this.props;
        const { departureDay } = this.state;
        return (
            <BookTourContainer
                {...this.props}
                tourById={tourById}
                listImageByIdTour={listImageByIdTour}
                departureDay={departureDay}
            />
        );
    }
}
BookTour.propTypes = {
    classes: PropTypes.object,
    tourAllActions: PropTypes.shape({
        fetchTourByIdRequest: PropTypes.func,
    }),
    imageAllActions: PropTypes.shape({
        fetchListImageByIdTourRequest: PropTypes.func,
    }),
    tourById: PropTypes.object,
    listImageByIdTour: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        tourById: state.tour.tourById,
        listImageByIdTour: state.image.listImageByIdTour,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        tourAllActions: bindActionCreators(tourActions, dispatch),
        imageAllActions: bindActionCreators(imageActions, dispatch),
        //B??n tr??i ch??? l?? ?????t t??n th??i, b??n ph???i l?? tourActions ??? b??n tour.action.js
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookTour);
