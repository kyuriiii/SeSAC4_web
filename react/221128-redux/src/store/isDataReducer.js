const isDataReducer = (state = false, action) => {
    if ( action.type === 'CHANGE' ){
        return !state;
    }
    return state;
}
export default isDataReducer;