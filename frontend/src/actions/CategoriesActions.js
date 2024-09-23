import {CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS} from "../constants/categoryConstants";

export const listCategoeirs = () => async(dispatch) => {
    try {
        dispatch ({type: CATEGORY_LIST_REQUEST});

        const {categories} = await import("../Data/categories")
        

        dispatch ({type:CATEGORY_LIST_SUCCESS, payload : categories})
    } catch(err) {

        dispatch({type: CATEGORY_LIST_FAIL,
            payload: err.message,
        })
    }
};