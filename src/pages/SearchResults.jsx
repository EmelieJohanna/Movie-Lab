import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../redux/features/searchSlice";
import MovieCard from "../components/MovieCard";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const { results, loading, currentPage, totalPages } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults({ query, page: currentPage }));
    }
  }, [dispatch, query, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(fetchSearchResults({ query, page: currentPage + 1 }));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(fetchSearchResults({ query, page: currentPage - 1 }));
    }
  };

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {loading === "pending" && <p>Loading...</p>}
      {loading === "succeeded" && results.length > 0 && (
        <>
          <div className="movie-list">
            {results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
      {loading === "succeeded" && results.length === 0 && (
        <p>No results found for "{query}".</p>
      )}
      {loading === "failed" && <p>Error fetching search results.</p>}
    </div>
  );
};

export default SearchResults;
