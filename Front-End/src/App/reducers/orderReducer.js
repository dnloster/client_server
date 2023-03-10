import * as orderConstants from "~/App/constants/orderModule.js";
import { ORDER_STATUS } from "~/App/apis/index";
import {
    messageError,
    messageSuccess,
    // messageLoading,
    messageWarning,
} from "~/App/helpers/message";

const orders = localStorage.getItem("orders");
const email = sessionStorage.getItem("email");
const initialState = {
    listOrder: [],
    orderByIdAccount: {},
    delete: [],
    patch: [],
    create: [],
    data: [],
    dataMomo: [],
    emailOrder: email ? email : orders ? JSON.parse(orders).email : null,
    dataPayPal: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case orderConstants.FETCH_ORDER:
            return {
                ...state,
                listOrder: [],
            };
        case orderConstants.FETCH_ORDER_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listOrder: data,
            };
        }
        case orderConstants.FETCH_ORDER_FAILED: {
            const { error } = action.payload;
            messageError(`${error}`, 1);
            return {
                ...state,
                listOrder: error,
            };
        }
        // Get order by email
        case orderConstants.FETCH_ORDER_BY_EMAIL_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listOrder: data,
            };
        }
        case orderConstants.FETCH_ORDER_BY_EMAIL_FAILED: {
            const { error } = action.payload;
            messageError(`${error}`, 1);
            return {
                ...state,
                listOrder: error,
            };
        }
        //Order Get By Id Account
        case orderConstants.FETCH_ORDER_GET_BYID_ACCOUNT_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                orderByIdAccount: data,
            };
        }
        case orderConstants.FETCH_ORDER_GET_BYID_ACCOUNT_FAILED: {
            const { error } = action.payload;
            messageError(`${error}`, 1);
            return {
                ...state,
                orderByIdAccount: error,
            };
        }

        //Post - Create
        case orderConstants.FETCH_ORDER_CREATE_SUCCESS: {
            const { data } = action.payload;
            const { order } = action.order;
            messageSuccess(`????n h??ng ${order.PIN} t???o th??nh c??ng!`, 3);
            return {
                ...state,
                create: data,
            };
        }
        case orderConstants.FETCH_ORDER_CREATE_FAILED: {
            const { error } = action.payload;
            messageError(`${error}`, 1);
            return {
                ...state,
                create: error,
            };
        }

        //Delete
        case orderConstants.FETCH_ORDER_DELETE_SUCCESS: {
            const { data } = action.payload;
            const { record } = action.record;
            messageWarning(`????n h??ng ${record.PIN} x??a th??nh c??ng!`, 3);
            return {
                ...state,
                delete: data,
            };
        }
        case orderConstants.FETCH_ORDER_DELETE_FAILED: {
            const { error } = action.payload;
            messageError(`${error}`, 1);
            return {
                ...state,
                delete: error,
            };
        }

        //Patch - update
        case orderConstants.FETCH_ORDER_PATCH_SUCCESS: {
            const { data } = action.payload;
            const { order } = action.order;
            if (
                data.updateOrder &&
                data.updateOrder.status === ORDER_STATUS.PAID
            ) {
                messageSuccess(`????n h??ng ${order.PIN} mua th??nh c??ng!`, 3);
            } else {
                messageError(`????n h??ng ${order.PIN} mua th???t b???i!`, 3);
            }
            return {
                ...state,
                patch: data,
            };
        }
        case orderConstants.FETCH_ORDER_PATCH_FAILED: {
            const { error } = action.payload;
            messageError(`${error}`, 1);
            return {
                ...state,
                patch: error,
            };
        }

        //Get Link Payment
        case orderConstants.FETCH_GET_LINK_PAYMENT_SUCCESS: {
            const { data } = action.payload;
            messageSuccess(`${data.message}!`, 3);
            return {
                ...state,
                data: data,
            };
        }
        case orderConstants.FETCH_GET_LINK_PAYMENT_FAILED: {
            const { error } = action.payload;
            messageError(`${error}`, 1);
            return {
                ...state,
                data: error,
            };
        }
        //Get Link Payment Momo
        case orderConstants.FETCH_GET_LINK_PAYMENT_MOMO_SUCCESS: {
            const { data } = action.payload;
            messageSuccess(`${data.message}!`, 3);
            return {
                ...state,
                dataMomo: data,
            };
        }
        case orderConstants.FETCH_GET_LINK_PAYMENT_MOMO_FAILED: {
            const { error } = action.payload;
            messageError(`${error}`, 1);
            return {
                ...state,
                dataMomo: error,
            };
        }
        case "FETCH_GET_LINK_PAYMENT_PAYPAL_SUCCESS": {
            const { data } = action.payload;
            messageSuccess(`${data.message}`, 3);
            return {
                ...state,
                dataPayPal: data,
            };
        }
        case "FETCH_GET_LINK_PAYMENT_PAYPAL_FAILED": {
            const { error } = action.payload;
            messageError(`${error}`, 1);
            return {
                ...state,
                dataPayPal: error,
            };
        }
        default:
            return state;
    }
};

export default reducer;
