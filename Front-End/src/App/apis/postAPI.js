import axiosService from "~/App/common/axiosService";
import { API_ENDPOINT } from "./index.js";

const url = "post";
const urls = "posts";
const urlImages = "imagesPost";

export const getListPost = () => {
    return axiosService.get(`${API_ENDPOINT}/${urls}`);
};

export const getListPostSearch = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${urls}/search`, data);
};

export const getPostById = (idPost) => {
    return axiosService.get(`${API_ENDPOINT}/${url}?idPost=${idPost}`);
};

export const votePostById = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${url}/vote`, data);
};

export const getListPostImage = () => {
    return axiosService.get(`${API_ENDPOINT}/${urlImages}`);
};
