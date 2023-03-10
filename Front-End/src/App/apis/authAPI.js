import axiosService from "~/App/common/axiosService";
import { API_ENDPOINT } from "./index.js";

const pathLogin = "login";
const pathRegister = "register";
const pathVerify = "verify";
const pathForgotPasswordStep1 = "forgotPasswordStep1";
const pathForgotPasswordStep2 = "forgotPasswordStep2";

export const login = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${pathLogin}`, data);
};
export const loginFaceBook = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${pathLogin}/facebook`, data);
};
export const loginGoogle = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${pathLogin}/google`, data);
};
export const register = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${pathRegister}`, data);
};
export const verifyEmail = (params) => {
    return axiosService.get(`${API_ENDPOINT}/${pathVerify}${params}`);
};
export const forgotPasswordStep1 = (data) => {
    return axiosService.post(
        `${API_ENDPOINT}/${pathForgotPasswordStep1}`,
        data
    );
};
export const forgotPasswordStep2 = (path, data) => {
    return axiosService.post(
        `${API_ENDPOINT}/${pathForgotPasswordStep2 + path}`,
        data
    );
};
