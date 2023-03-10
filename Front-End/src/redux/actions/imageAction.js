import * as imageApis from "~/App/apis/imageAPI";
import * as imageConstants from "~/App/constants/imageModule";
import * as tourConstants from "~/App/constants/tourModule";

export const fetchLogoSuccess = (data) => {
    return {
        type: "FETCH_LOGO_SUCESS",
        payload: { data },
    };
};

export const fetchLogoError = (err) => {
    return {
        type: "FETCH_LOGO_ERROR",
        payload: { err },
    };
};

export const fetchLogoRequest = () => {
    return (dispatch) => {
        imageApis
            .getLogo()
            .then((res) => {
                const { data } = res;
                dispatch(fetchLogoSuccess(data.image));
            })
            .catch((err) => {
                dispatch(fetchLogoError(err));
            });
    };
};

export const fetchListImageByIdTour = () => {
    return {
        type: imageConstants.FETCH_IMAGE_GET_BYID,
    };
};

//List Image Tour do tour action quản lý

//GET Image BY ID Tour
export const fetchImageByIdTourSuccess = (data) => {
    return {
        type: imageConstants.FETCH_IMAGE_GET_BYID_TOUR_SUCCESS,
        payload: {
            data,
        },
    };
};

export const fetchImageByIdTourError = (error) => {
    return {
        type: imageConstants.FETCH_IMAGE_GET_BYID_TOUR_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchListImageByIdTourRequest = (idTour) => {
    return (dispatch) => {
        imageApis
            .getListImageByIdTour(idTour)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchImageByIdTourSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchImageByIdTourError(error));
            });
    };
};
//end Get Tour By ID

//Delete Tour
export const fetchDeleteTourImageSuccess = (file, data) => {
    return {
        type: tourConstants.FETCH_TOUR_IMAGE_DELETE_SUCCESS,
        payload: {
            data,
        },
        file: { file },
    };
};

export const fetchDeleteTourImageError = (error) => {
    return {
        type: tourConstants.FETCH_TOUR_IMAGE_DELETE_FAILED,
        payload: {
            error,
        },
    };
};

export const fetchDeleteTourImageRequest = (file) => {
    return (dispatch) => {
        imageApis
            .deleteImageTour(file.idImage, file.name)
            .then((resp) => {
                const { data } = resp;
                dispatch(fetchDeleteTourImageSuccess(file, data));
            })
            .catch((error) => {
                dispatch(fetchDeleteTourImageError(error));
            });
    };
};
