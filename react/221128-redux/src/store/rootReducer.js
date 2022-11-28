import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    number: counterReducer,
    isData: isDataReducer
});
export default rootReducer;
