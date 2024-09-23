
import { applyMiddleware, combineReducers, createStore} from "redux";
import { courseReducer, courseDetailsReducer} from "./reducers/CoursesReducer";
import {categoriesReducer} from "./reducers/CategoriesReducer"
import {thunk} from "redux-thunk"


const initialState = {
    courses : [],
    categories: []

}

const reducers = combineReducers({
    courses: courseReducer,
    courseDetails : courseDetailsReducer,
    categories : categoriesReducer,
});

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
)

export default store