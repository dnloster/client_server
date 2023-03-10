import * as timelineConstants from "~/App/constants/timelineModule";
import { toastError } from "~/App/helpers/toastify";

const initialState = {
    listTimelineByIdTour: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //Load List timeline ById Tour
        case timelineConstants.FETCH_TIMELINE_GET_BYID_TOUR_SUCCESS: {
            const { data } = action.payload;
            // toastListTimelineGetByIdTourSuccess(data);
            return {
                ...state,
                listTimelineByIdTour: data[0],
            };
        }
        case timelineConstants.FETCH_TIMELINE_GET_BYID_TOUR_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listTimelineByIdTour: [],
            };
        }
        default:
            return state;
    }
};

export default reducer;
