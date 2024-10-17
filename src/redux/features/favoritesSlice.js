import { createSlice } from "@reduxjs/toolkit";

// Load favorites from localStorage or default to an empty array
const initialState = {
  items: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // Check if the movie is already in favorites
      const isAlreadyFavorite = state.items.some(
        (movie) => movie.id === action.payload.id
      );
      if (!isAlreadyFavorite) {
        state.items.push(action.payload);
        // Save updated favorites to localStorage
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFavorite: (state, action) => {
      // Remove the movie from favorites
      state.items = state.items.filter((movie) => movie.id !== action.payload);
      // Save updated favorites to localStorage
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    clearFavorites: (state) => {
      // Clear all favorites
      state.items = [];
      // Remove favorites from localStorage
      localStorage.removeItem("favorites");
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
