import music from './musicReducer'
import user from './userReducer'
import elements from './elementsReducer'
import quiz from './quizReducer'
import { combineReducers } from "redux";

export default  combineReducers({
    music,
    user,
    elements,
    quiz
})