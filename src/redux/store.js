import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/fetchMovies";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
