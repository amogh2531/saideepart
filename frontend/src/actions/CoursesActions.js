
import { COURSE_LIST_SUCCESS,COURSE_LIST_FAIL,COURSE_LIST_REQUEST,COURSE_DETAILS_FAIL,COURSE_DETAILS_REQUEST,COURSE_DETAILS_SUCCESS } from "../constants/courseConstants";

export const listCourses = () => async (dispatch) => {
    try {
        dispatch ({type: COURSE_LIST_REQUEST});

        const {courses} = await import("../Data/courses")
        

        dispatch({type: COURSE_LIST_SUCCESS, payload: courses})
    } catch (err) {

        dispatch ({type:COURSE_LIST_FAIL, payload : err.message})
    }
}





export const listCourseDetails = (id) => async (dispatch, getState) =>{
        try {
            dispatch({type:COURSE_DETAILS_REQUEST})

            const {courses} = getState().courses
            const course = courses.find((course) => course.id === id)

            if (course) {
                dispatch({type:COURSE_DETAILS_SUCCESS, payload: course})
            }
        } catch(err) {
            dispatch({type:COURSE_DETAILS_FAIL, payload: err.message})
        }
        
      
    }
    
