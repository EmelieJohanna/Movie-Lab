import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/fetchMovies";
import favoritesReducer from "./features/favoritesSlice";
import searchReducer from "./features/searchSlice";
import movieDetailsReducer from "./features/movieDetailsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
    search: searchReducer,
    movieDetails: movieDetailsReducer,
  },
});
