import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/fetchMovies";
import favoritesReducer from "./features/favoritesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
  },
});
