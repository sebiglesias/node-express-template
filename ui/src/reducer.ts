import { combineReducers } from 'redux'
import exampleReducer from "./example/exampleSlice";
import wordsReducer from "./autocompleteBox/boxSlice";

const rootReducer = combineReducers({
    example: exampleReducer,
    words: wordsReducer
})


export default rootReducer