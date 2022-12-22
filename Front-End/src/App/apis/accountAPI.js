import axiosService from "~/App/common/axiosService";
import { API_ENDPOINT } from "./index.js";

const pathAccountWithEmail = "accountWithEmail";
const pathOrder = "orderWithEmail";
const pathFavorite = "favoritesWithEmail";
const pathAccount = "account";

export const getAllAccount = () => {
    return axiosService.get(`${API_ENDPOINT}/accounts`);
};

export const getProfileWithEmail = (email) => {
    return axiosService.get(
        `${API_ENDPOINT}/${pathAccountWithEmail}?email=${email}`
    );
};

export const getOrderOfAccountWithEmail = (email) => {
    return axiosService.get(`${API_ENDPOINT}/${pathOrder}?email=${email}`);
};

export const getFavoritesWithEmail = (email) => {
    return axiosService.get(`${API_ENDPOINT}/${pathFavorite}?email=${email}`);
};

export const patchUpdateAccount = (account) => {
    return axiosService.patch(`${API_ENDPOINT}/${pathAccount}`, account);
};
