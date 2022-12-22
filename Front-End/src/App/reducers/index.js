import { combineReducers } from "redux";

import tourReducer from "./tourReducer";
import scheduleReducer from "./scheduleReducer";
import imageReducer from "./imageReducer";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";
import accountReducer from "./accountReducer";
import timelineReducer from "./timelineReducer";
import evaluateReducer from "./evaluateReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    tour: tourReducer,
    image: imageReducer,
    schedule: scheduleReducer,
    auth: authReducer,
    order: orderReducer,
    account: accountReducer,
    timeline: timelineReducer,
    evaluate: evaluateReducer,
    post: postReducer,
});

export default rootReducer;
