import { moviesReducer } from "./moviesReducers";
import { combineReducers } from "redux";
import { movieDetailsReducer } from "./movieDetailsReducer";
const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer
});
export default rootReducer;
