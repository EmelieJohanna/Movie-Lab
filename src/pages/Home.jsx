import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/features/fetchMovies";
import MovieList from "../components/MovieList";
import MetaTags from "../components/MetaTags";

export default function Home() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.movies.currentPage);
  const totalPages = useSelector((state) => state.movies.totalPages);

  // Dispatch the fetchMovies action when the component mounts or page changes
  useEffect(() => {
    dispatch(fetchMovies(currentPage)); // Fetch movies for the current page
  }, [dispatch, currentPage]);

  // Nav to next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(fetchMovies(currentPage + 1));
    }
  };

  // Nav to prev page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(fetchMovies(currentPage - 1));
    }
  };

  return (
    <div className="home-container">
      <MetaTags
        title="Home"
        description="Discover popular movies on Movie Lab."
        url="https://movie-lab-ruddy.vercel.app/"
      />
      <h1>Welcome to Movie Lab</h1>
      <MovieList />
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
