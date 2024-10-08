
import { COURSE_LIST_SUCCESS,COURSE_LIST_FAIL,COURSE_LIST_REQUEST,COURSE_DETAILS_FAIL,COURSE_DETAILS_REQUEST,COURSE_DETAILS_SUCCESS } from "../constants/courseConstants";

export const courseReducer = (state = {courses : [] }, action) => {
    switch(action.type) {
        case COURSE_LIST_REQUEST :
            return {loading : true , courses : [] }
        case COURSE_LIST_SUCCESS :
            return {loading : false , courses: action.payload}
        case COURSE_LIST_FAIL :
            return {loading : false , error: action.payload}
        default :
            return state
    }
}

export const courseDetailsReducer = (state = {course : {} }, action) => {
    switch(action.type) {
        case COURSE_DETAILS_REQUEST :
            return {loading : true ,  course : {}}
        case COURSE_DETAILS_SUCCESS :
            return { loading : false , course : action.payload}
        case COURSE_DETAILS_FAIL :
            return {loading : false , error : action.payload}
        default :
            return state
    }
}

