const MOVIES = [
  {
    id: 1,
    name: "Pulp Fiction",
    year: 1994,
  },
  {
    id: 2,
    name: "Kill Bill",
    year: 2003,
  },
  {
    id: 3,
    name: "Reservoir Dogs",
    year: 1992,
  },
];
export const getMovies = () => {
  return {
    type: "MOVIES_LIST",
    payload: MOVIES,
  };
};
export const getMovieDetails = () => {
  return {
    type: "MOVIE_DETAILS",
    payload: MOVIES[0]
  };
};
