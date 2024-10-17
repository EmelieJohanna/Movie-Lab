import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
export default function MovieList() {
  const movies = useSelector((state) => state.movies.entities) || [];
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  if (loading === "pending") {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (movies.length === 0) {
    return <p>No movies found</p>;
  }

  console.log(movies);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
