import * as evaluateConstants from "~/App/constants/evaluateModule";
import { toastError } from "~/App/helpers/toastify";
import { messageSuccess } from "~/App/helpers/message";
const initialState = {
    listEvaluateByIdTour: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_EVALUATE": {
            return { ...state, listAllEvaluate: [] };
        }
        case "FETCH_ALL_EVALUATES_SUCCESS": {
            return {
                ...state,
                listAllEvaluate: [action.payload],
            };
        }
        case "FETCH_ALL_EVALUATES_SUCCESS_FAILED": {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listAllEvaluate: [],
            };
        }
        //Load List Evaluate ById Tour
        case evaluateConstants.FETCH_EVALUATE_GET_BYID_TOUR_SUCCESS: {
            const { data } = action.payload;
            // toastListEvaluateGetByIdTourSuccess(data);
            return {
                ...state,
                listEvaluateByIdTour: data[0],
            };
        }
        case evaluateConstants.FETCH_EVALUATE_GET_BYID_TOUR_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listEvaluateByIdTour: [],
            };
        }
        //Post eveluate
        case evaluateConstants.FETCH_POST_EVALUATE_SUCCESS: {
            messageSuccess("Cảm ơn bạn đã viết đánh giá!", 3);
            return {
                ...state,
            };
        }
        case evaluateConstants.FETCH_POST_EVALUATE_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};

export default reducer;
