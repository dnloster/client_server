import * as evaluateApis from "~/App/apis/evaluateAPI";
import * as evaluateConstants from "~/App/constants/evaluateModule";

export const fetchListEvaluate = () => {
    return {
        type: "FETCH_EVALUATE",
    };
};

export const fetchAllEvaluatesSuccess = (data) => {
    return {
        type: "FETCH_ALL_EVALUATES_SUCCESS",
        payload: {
            data,
        },
    };
};

export const fetchAllEvaluatesError = (error) => {
    return {
        type: "FETCH_ALL_EVALUATES_FAILED",
        payload: {
            error,
        },
    };
};

export const fetchAllEvaluatesRequest = () => {
    return async (dispatch) => {
        dispatch(fetchListEvaluate());
        await evaluateApis
            .getListEvaluates()
            .then((res) => {
                const { data } = res;
                dispatch(fetchAllEvaluatesSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchAllEvaluatesError(error));
            });
    };
};

//GET Evaluate BY ID Tour
export const fetchEvaluateByIdTourSuccess = (data) => {
    return {
        type: evaluateConstants.FETCH_EVALUATE_GET_BYID_TOUR_SUCCESS,
        payload: {
            data,
        },
    };
};

export const fetchEvaluateByIdTourError = (error) => {
    return {
        type: evaluateConstants.FETCH_EVALUATE_GET_BYID_TOUR_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchListEvaluateByIdTourRequest = (idTour) => {
    return (dispatch) => {
        evaluateApis
            .getListEvaluateByIdTour(idTour)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchEvaluateByIdTourSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchEvaluateByIdTourError(error));
            });
    };
};
//end Get Tour By ID

//POST Evaluate
export const fetchPostEvaluateSuccess = (data) => {
    return {
        type: evaluateConstants.FETCH_POST_EVALUATE_SUCCESS,
        payload: {
            data,
        },
    };
};

export const fetchPostEvaluateError = (error) => {
    return {
        type: evaluateConstants.FETCH_POST_EVALUATE_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchPostEvaluateRequest = (data) => {
    return (dispatch) => {
        evaluateApis
            .postEvaluate(data)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchPostEvaluateSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchPostEvaluateError(error));
            });
    };
};
//end Create Evaluate
