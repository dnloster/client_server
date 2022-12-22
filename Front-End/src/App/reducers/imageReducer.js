import * as imageConstants from "~/App/constants/imageModule";
import * as tourConstants from "~/App/constants/tourModule";
import { toastError, toastDeleteImageSuccess } from "~/App/helpers/toastify";

const initialState = {
    listImageTour: [],
    delete: [],
    uploadImage: [],
    listImageByIdTour: [],
    logo: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_LOGO_SUCESS": {
            const { data } = action.payload;
            return {
                ...state,
                logo: data,
            };
        }
        case "FETCH_LOGO_ERROR": {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                logo: error,
            };
        }
        //Load List Image ById Tour
        case imageConstants.FETCH_IMAGE_GET_BYID_TOUR_SUCCESS: {
            const { data } = action.payload;
            // toastListImageGetByIdTourSuccess(data);
            return {
                ...state,
                listImageByIdTour: data,
            };
        }
        case imageConstants.FETCH_IMAGE_GET_BYID_TOUR_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listImageByIdTour: error,
            };
        }
        //Delete
        case tourConstants.FETCH_TOUR_IMAGE_DELETE_SUCCESS: {
            const { data } = action.payload;
            const { file } = action.file;
            toastDeleteImageSuccess(file);
            return {
                ...state,
                delete: data,
            };
        }
        case tourConstants.FETCH_TOUR_IMAGE_DELETE_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                delete: error,
            };
        }
        default:
            return state;
    }
};

export default reducer;
