import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourActions from "~/redux/actions/tourAction";
import * as imageActions from "~/redux/actions/imageAction";
import * as scheduleActions from "~/redux/actions/scheduleAction";
import * as timelineActions from "~/redux/actions/timelineAction";
import * as evaluateActions from "~/redux/actions/evaluateAction";

import TourSingleContainer from "./TourSingleContainer";

class TourSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tourById: {},
            listImageByIdTour: [],
            scheduleByIdTour: {},
            haveData: false,
        };
    }

    fetch = async () => {
        const { idTour } = this.props.match.params;

        const {
            tourAllActions,
            imageAllActions,
            scheduleAllActions,
            timelineAllActions,
            evaluateAllActions,
        } = this.props;

        //load Tour byId
        const { fetchTourByIdRequest } = tourAllActions;
        await fetchTourByIdRequest(idTour);

        //Load images with idTour
        const { fetchListImageByIdTourRequest } = imageAllActions;
        await fetchListImageByIdTourRequest(idTour);

        //Load schedule with idTour
        const { fetchScheduleByIdTourRequest } = scheduleAllActions;
        await fetchScheduleByIdTourRequest(idTour);

        //Load timeline with idTour
        const { fetchListTimelineByIdTourRequest } = timelineAllActions;
        await fetchListTimelineByIdTourRequest(idTour);

        //Load evaluate with idTour
        const { fetchListEvaluateByIdTourRequest } = evaluateAllActions;
        await fetchListEvaluateByIdTourRequest(idTour);
    };
    componentWillMount() {
        this.fetch();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

        const {
            tourById,
            listImageByIdTour,
            scheduleByIdTour,
            listTimelineByIdTour,
            listEvaluateByIdTour,
        } = this.props;
        this.setState({
            tourById,
            listImageByIdTour,
            scheduleByIdTour,
            listTimelineByIdTour,
            listEvaluateByIdTour,
            haveData: true,
        });
    }

    onSubmitEvaluate = (data) => {
        this.props.evaluateAllActions.fetchPostEvaluateRequest(data);
    };

    render() {
        const {
            tourById,
            listImageByIdTour,
            scheduleByIdTour,
            listTimelineByIdTour,
            listEvaluateByIdTour,
        } = this.props;
        return (
            <TourSingleContainer
                tourById={tourById}
                scheduleByIdTour={scheduleByIdTour}
                listImageByIdTour={listImageByIdTour}
                listTimelineByIdTour={listTimelineByIdTour}
                listEvaluateByIdTour={listEvaluateByIdTour}
                handleSubmitEvaluate={this.onSubmitEvaluate}
                {...this.props}
            />
        );
    }
}
TourSingle.propTypes = {
    classes: PropTypes.object,
    tourAllActions: PropTypes.shape({
        fetchTourByIdRequest: PropTypes.func,
    }),
    scheduleAllActions: PropTypes.shape({
        fetchScheduleByIdTourRequest: PropTypes.func,
    }),
    imageAllActions: PropTypes.shape({
        fetchListImageByIdTourRequest: PropTypes.func,
    }),
    timelineAllActions: PropTypes.shape({
        fetchListTimelineByIdTourRequest: PropTypes.func,
    }),
    evaluateAllActions: PropTypes.shape({
        fetchListEvaluateByIdTourRequest: PropTypes.func,
        fetchPostEvaluateRequest: PropTypes.func,
    }),
    tourById: PropTypes.object,
    listImageByIdTour: PropTypes.array,
    scheduleByIdTour: PropTypes.object,
    listTimelineByIdTour: PropTypes.object,
    listEvaluateByIdTour: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        tourById: state.tour.tourById,
        listImageByIdTour: state.image.listImageByIdTour,
        scheduleByIdTour: state.schedule.scheduleByIdTour,
        listTimelineByIdTour: state.timeline.listTimelineByIdTour,
        listEvaluateByIdTour: state.evaluate.listEvaluateByIdTour,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        tourAllActions: bindActionCreators(tourActions, dispatch),
        imageAllActions: bindActionCreators(imageActions, dispatch),
        scheduleAllActions: bindActionCreators(scheduleActions, dispatch),
        timelineAllActions: bindActionCreators(timelineActions, dispatch),
        evaluateAllActions: bindActionCreators(evaluateActions, dispatch),
        //B??n tr??i ch??? l?? ?????t t??n th??i, b??n ph???i l?? tourActions ??? b??n tour.action.js
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TourSingle);
