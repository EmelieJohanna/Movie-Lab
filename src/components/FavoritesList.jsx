import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export default function FavoritesList() {
  const favorites = useSelector((state) => state.favorites.items); // Get favorite movies from Redux

  return (
    <div className="favorites-list">
      {favorites.length > 0 ? (
        favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p>You don't have any favorite movies yet.</p>
      )}
    </div>
  );
}
