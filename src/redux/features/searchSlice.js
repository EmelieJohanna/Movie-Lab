import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Async thunk to fetch search suggestions
export const fetchSearchSuggestions = createAsyncThunk(
  "search/fetchSearchSuggestions",
  async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&language=en-US&page=1&include_adult=false`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch search suggestions");
    }
    const data = await response.json();
    return data.results; // Return the search results
  }
);

// Async thunk to fetch search results for the search page
export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async ({ query, page = 1 }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&language=en-US&page=${page}&include_adult=false`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch search results");
    }
    const data = await response.json();
    return { data, page, query };
  }
);

const initialState = {
  suggestions: [],
  results: [],
  loading: "idle",
  error: null,
  currentPage: 1,
  totalPages: 0,
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSuggestions: (state) => {
      state.suggestions = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchSuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload;
      })
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.results = action.payload.data.results;
        state.currentPage = action.payload.page;
        state.totalPages = action.payload.data.total_pages;
        state.searchTerm = action.payload.query;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearSuggestions } = searchSlice.actions;

export default searchSlice.reducer;
