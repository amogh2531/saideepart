import { SET_COURSES, SET_COURSE_DETAILS } from "../constants/courseConstants"

export const courseReducer = (state = {courses : []}, action) => {
    switch(action.type) {
        case SET_COURSES :
            return {...state , courses: action.payload}
        default :
            return state
    }
}


export const courseDetailsReducer = (state = {course : null }, action) => {
    switch(action.type) {
        case SET_COURSE_DETAILS :
            return {...state, course : action.payload}
        default :
            return state
    }
}

