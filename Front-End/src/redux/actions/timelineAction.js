import * as timelineApis from "~/App/apis/timelineAPI";
import * as timelineConstants from "~/App/constants/timelineModule";

//GET Timeline BY ID Tour
export const fetchTimelineByIdTourSuccess = (data) => {
    return {
        type: timelineConstants.FETCH_TIMELINE_GET_BYID_TOUR_SUCCESS,
        payload: {
            data,
        },
    };
};

export const fetchTimelineByIdTourError = (error) => {
    return {
        type: timelineConstants.FETCH_TIMELINE_GET_BYID_TOUR_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchListTimelineByIdTourRequest = (idTour) => {
    return (dispatch) => {
        timelineApis
            .getListTimelineByIdTour(idTour)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchTimelineByIdTourSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchTimelineByIdTourError(error));
            });
    };
};
//end Get Tour By ID
