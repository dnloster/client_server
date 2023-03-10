import * as tourApis from "~/App/apis/tourAPI";
import * as tourConstants from "~/App/constants/tourModule";

export const fetchListTour = () => {
    return {
        type: tourConstants.FETCH_TOUR,
    };
};

//List Tour
export const fetchListTourSuccess = (data) => {
    return {
        type: tourConstants.FETCH_TOUR_SUCCESS,
        payload: {
            // Thường đi làm thì người ta hay gọi là FETCH
            //data gửi kèm trong actions là payload ở vị trí này
            data,
        },
    };
};

export const fetchListTourError = (error) => {
    return {
        type: tourConstants.FETCH_TOUR_FAILED,
        payload: {
            error,
        },
    };
};
/**
 * B1: fetch isTourRequest()
 * B2: ResetL state tours --> []
 * B3: Khi API thành công thì vào then:
 * fetchListTourSucces (data response)
 *
 */
export const fetchListTourRequest = () => {
    return (dispatch) => {
        dispatch(fetchListTour()); //reset state tours-->[]
        tourApis
            .getListTour()
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchListTourSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchListTourError(error));
            });
    };
};

// export const fetchListTourRequest = async (dispatch) => {
//     try {
//         dispatch({ type: "FETCH_TOUR" });
//         const response = await tourApis.getListTour();
//         const responseBody = await response.json();
//         dispatch({
//             type: "FETCH_TOUR_SUCCESS",
//             data: responseBody,
//         });
//     } catch (error) {
//         // console.error(error);
//         dispatch(fetchListTourError(error));
//     }
// };

/**
 * List Tour Search
 */
export const fetchListTourSearchSuccess = (data) => {
    return {
        type: tourConstants.FETCH_TOUR_SEARCH_SUCCESS,
        payload: {
            data,
        },
    };
};
export const fetchListTourSearchError = (error) => {
    return {
        type: tourConstants.FETCH_TOUR_SEARCH_FAILED,
        payload: {
            error,
        },
    };
};
export const fetchListTourSearchRequest = (data) => {
    return (dispatch) => {
        tourApis
            .getListTourSearch(data)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchListTourSearchSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchListTourSearchError(error));
            });
    };
};

//GET TOUR BY ID
export const fetchTourByIdSuccess = (data) => {
    return {
        type: tourConstants.FETCH_TOUR_GET_BYID_SUCCESS,
        payload: {
            data,
        },
    };
};

export const fetchTourByIdError = (error) => {
    return {
        type: tourConstants.FETCH_TOUR_GET_BYID_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchTourByIdRequest = (idTour) => {
    return (dispatch) => {
        tourApis
            .getTourById(idTour)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchTourByIdSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchTourByIdError(error));
            });
    };
};
//end Get Tour By ID

//POST Tour - create
export const fetchPostTourSuccess = (newRecord, data) => {
    return {
        type: tourConstants.FETCH_TOUR_CREATE_SUCCESS,
        payload: {
            // Thường đi làm thì người ta hay gọi là FETCH
            //data gửi kèm trong actions là payload ở vị trí này
            data,
        },
        newRecord: { newRecord },
    };
};

export const fetchPostTourError = (error) => {
    return {
        type: tourConstants.FETCH_TOUR_CREATE_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchPostTourRequest = (newRecord) => {
    return (dispatch) => {
        tourApis
            .postTour(newRecord)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchPostTourSuccess(newRecord, data));
            })
            .catch((error) => {
                dispatch(fetchPostTourError(error));
            });
    };
};
//end Create Tour

//Delete Tour
export const fetchDeleteTourSuccess = (record, data) => {
    return {
        type: tourConstants.FETCH_TOUR_DELETE_SUCCESS,
        payload: {
            // Thường đi làm thì người ta hay gọi là FETCH
            //data gửi kèm trong actions là payload ở vị trí này
            data,
        },
        record: { record },
    };
};

export const fetchDeleteTourError = (error) => {
    return {
        type: tourConstants.FETCH_TOUR_DELETE_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchDeleteTourRequest = (record) => {
    return (dispatch) => {
        tourApis
            .deleteTour(record.idTour)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchDeleteTourSuccess(record, data));
            })
            .catch((error) => {
                dispatch(fetchDeleteTourError(error));
            });
    };
};

//PATCH Tour
export const fetchPatchTourSuccess = (newRecord, data) => {
    return {
        type: tourConstants.FETCH_TOUR_PATCH_SUCCESS,
        payload: {
            // Thường đi làm thì người ta hay gọi là FETCH
            //data gửi kèm trong actions là payload ở vị trí này
            data,
        },
        newRecord: { newRecord },
    };
};

export const fetchPatchTourError = (error) => {
    return {
        type: tourConstants.FETCH_TOUR_PATCH_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchPatchTourRequest = (newRecord) => {
    return (dispatch) => {
        tourApis
            .patchTour(newRecord)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchPatchTourSuccess(newRecord, data));
            })
            .catch((error) => {
                dispatch(fetchPatchTourError(error));
            });
    };
};

//Image Tour
export const fetchListTourImage = () => {
    return {
        type: tourConstants.FETCH_TOUR_IMAGE,
    };
};

//List Tour image
export const fetchListTourImageSuccess = (data) => {
    return {
        type: tourConstants.FETCH_TOUR_IMAGE_SUCCESS,
        payload: {
            data,
        },
    };
};

export const fetchListTourImageError = (error) => {
    return {
        type: tourConstants.FETCH_TOUR_IMAGE_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchListTourImageRequest = () => {
    return (dispatch) => {
        dispatch(fetchListTourImage()); //reset state Images-->[]
        tourApis
            .getListImageTour()
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchListTourImageSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchListTourImageError(error));
            });
    };
};

//GET TOUR BY TIME
export const fetchTourByTimeSuccess = (data) => {
    return {
        type: tourConstants.FETCH_TOUR_GET_BYTIME_SUCCESS,
        payload: {
            data,
        },
    };
};

export const fetchTourByTimeError = (error) => {
    return {
        type: tourConstants.FETCH_TOUR_GET_BYTIME_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchTourByTimeRequest = (time) => {
    return (dispatch) => {
        tourApis
            .getTourByTime(time)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchTourByTimeSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchTourByTimeError(error));
            });
    };
};
//end Get Tour By Time
