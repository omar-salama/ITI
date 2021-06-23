export const moviesReducer = (state=null, action) => {
    if (action.type === "MOVIES_LIST")
        return action.payload;
    return state;
}