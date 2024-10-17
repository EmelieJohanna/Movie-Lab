import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/features/favoritesSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  // Check if the movie is in the favorites list
  const isFavorite = favorites.some((favorite) => favorite.id === movie.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id)); // Remove from favorites
    } else {
      dispatch(addFavorite(movie)); // Add to favorites
    }
  };
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie-card">
      <img
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={`Movie Cover for ${movie.title}`}
      />
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;
