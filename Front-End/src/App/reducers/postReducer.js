import * as postConstants from "~/App/constants/postModule";
import { toastError } from "~/App/helpers/toastify";
import { messageSuccess } from "~/App/helpers/message";
import { compareValues } from "~/App/helpers/compareValue";

const initialState = {
    listPost: [],
    listPostImage: [],
    listPostSearch: [],
    listPostNew: [],
    listPostViews: [],
    postById: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //Load List Post
        case postConstants.FETCH_POST_SUCCESS: {
            const { data } = action.payload;
            let listPostRecent =
                data.length &&
                data.map((post) => {
                    let imagePost = state.listPostImage.filter(
                        (imagePost) => imagePost.idPost === post.idPost
                    );
                    return { ...post, image: imagePost[0] };
                });
            return {
                ...state,
                listPost: listPostRecent,
                listPostNew: listPostRecent
                    .sort(compareValues("dateAdded", "desc"))
                    .slice(0, 5),
                listPostViews: listPostRecent
                    .sort(compareValues("views", "desc"))
                    .slice(0, 5),
            };
        }
        case postConstants.FETCH_POST_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listPost: [],
            };
        }
        //Load List Post Image
        case postConstants.FETCH_POST_IMAGE_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listPostImage: data,
            };
        }
        case postConstants.FETCH_POST_IMAGE_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listPostImage: [],
            };
        }
        //Load List Post Search
        case postConstants.FETCH_POST_SEARCH_SUCCESS: {
            const { data } = action.payload;
            let listPostRecent =
                data[0].length &&
                data[0].map((post) => {
                    let imagePost = state.listPostImage.filter(
                        (imagePost) => imagePost.idPost === post.idPost
                    );
                    return { ...post, image: imagePost[0] };
                });
            return {
                ...state,
                listPostSearch: listPostRecent,
            };
        }
        case postConstants.FETCH_POST_SEARCH_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listPostSearch: [],
            };
        }
        //Load Post by Id
        case postConstants.FETCH_POST_GET_BYID_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                postById: data[0],
            };
        }
        case postConstants.FETCH_POST_GET_BYID_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                postById: {},
            };
        }
        //Vote Post
        case postConstants.VOTE_POST_SUCCESS: {
            messageSuccess("C???m ??n b???n ???? vote b??i vi???t", 3);
            return {
                ...state,
            };
        }
        case postConstants.VOTE_POST_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};

export default reducer;
