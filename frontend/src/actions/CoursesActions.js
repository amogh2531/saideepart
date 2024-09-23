import { SET_COURSE_DETAILS, SET_COURSES } from "../constants/courseConstants";



export const setCourses = (courses) =>({
    type : SET_COURSES,
    payload : courses
})

export const setCourseDetsils = (course) => ({
    type : SET_COURSE_DETAILS,
    payload : course
})

export const listCourseDetails = (id) =>{
    return (dispatch, getState) =>{
        const {courses} = getState().courses
        const course = courses.find((course) => course.id === id)
        if (course) {
            dispatch(setCourseDetsils(course))
        }
    }
    
}