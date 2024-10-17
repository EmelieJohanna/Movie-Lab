import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Thunk to fetch movie details by ID
export const fetchMovieDetails = createAsyncThunk(
  "movieDetails/fetchMovieDetails",
  async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?&language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    return data;
  }
);

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movie: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieDetailsSlice.reducer;
