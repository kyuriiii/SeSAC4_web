const diaryReducer = (state = [], action) => {
    if ( action.type === 'DIARY/WRITE' ) {
        state = [...state, action.payload ];
    } else if ( action.type === 'DIARY/DELETE' ) {
        state = state.filter((diary) => diary.id != action.id );
    }

    return state;
}
export default diaryReducer;