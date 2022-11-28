const counterReducer = (state = 0, action) => {
    if ( action.type === 'INCREASE' ){
        return state + 1;
    } else if ( action.type === 'DECREASE' ) {
        return state - 1;
    } 
    return state;
}
export default counterReducer;