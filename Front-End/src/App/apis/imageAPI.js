import axiosService from "~/App/common/axiosService";
import { API_ENDPOINT } from "./index.js";

const url = "image";

export const getLogo = () => {
    return axiosService.get(`${API_ENDPOINT}/config/?idConfig=5`);
};

export const getListImageByIdTour = (idTour) => {
    return axiosService.get(`${API_ENDPOINT}/${url}?idTour=${idTour}`);
};

export const deleteImageTour = (idImage, name) => {
    return axiosService.delete(
        `${API_ENDPOINT}/${url}/?idImage=${idImage}&name=${name}`
    );
};

export const uploadImageTour = (file, idTour) => {
    return axiosService.post(
        `${API_ENDPOINT}/${url}/?idTour=${idTour}`,
        { body: file },
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
};
