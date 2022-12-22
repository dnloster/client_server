import axiosService from "~/App/common/axiosService";
import { API_ENDPOINT } from "./index.js";

const url = "timeline";

export const getListTimelineByIdTour = (idTour) => {
    return axiosService.get(`${API_ENDPOINT}/${url}?idTour=${idTour}`);
};
