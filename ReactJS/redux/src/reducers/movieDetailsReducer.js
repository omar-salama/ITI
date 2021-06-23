 export const movieDetailsReducer = (state=null, action) => {
    if (action.type === "MOVIE_DETAILS") {
        return action.payload
    }
    return state
}