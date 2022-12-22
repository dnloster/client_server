import axiosService from "~/App/common/axiosService";
import { API_ENDPOINT } from "./index.js";

const url = "evaluate";
const urls = "evaluates";

export const getListEvaluateByIdTour = (idTour) => {
    return axiosService.get(`${API_ENDPOINT}/${url}/bytour?idTour=${idTour}`);
};

export const postEvaluate = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const getListEvaluates = () => {
    return axiosService.get(`${API_ENDPOINT}/${urls}`);
};
