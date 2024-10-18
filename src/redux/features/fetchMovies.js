import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMoviesStatus",
  async (page = 1) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();

    return { data, page };
  }
);

const initialState = {
  entities: [],
  // overksam, i vänteläge
  loading: "idle",
  error: null,
  currentPage: 1, // Track the current page
  totalPages: 0, // Store total pages from the API response
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = "succeeded";
        // Assign the 'results' array to 'entities'
        state.entities = action.payload.data.results;
        state.currentPage = action.payload.page; // Update the current page
        state.totalPages = action.payload.data.total_pages; // Total pages from API response
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;

// --------- For TS ------------
// interface MoviesState{
//     entities: any[],
//     loading: "idle"|"pending"| "succeded"| "failed"
// }
// const initialState: MoviesState = {
//   entities: [],
//   // overksam, i vänteläge
//   loading: "idle",
//   error: null,
// };
