import dateReducer from './dateReducer';
import diaryReducer from './diaryReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    dates: dateReducer,
    diaries: diaryReducer
});
export default rootReducer;