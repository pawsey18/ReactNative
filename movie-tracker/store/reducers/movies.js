import MOVIES from "../../data/dummy-data";

const initialState = {
  availableMovies: MOVIES,
  userMovies: MOVIES.filter((m) => m.id === 14001)
};

export default (state = initialState, action) => {
  return state;
};
