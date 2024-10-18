import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../redux/features/movieDetailsSlice";
import { addFavorite, removeFavorite } from "../redux/features/favoritesSlice";
import TagManager from "react-gtm-module";
import MetaTags from "../components/MetaTags";

export default function MovieDetails() {
  const { id } = useParams(); // Get movie ID from route parameters
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieDetails.movie);
  const loading = useSelector((state) => state.movieDetails.loading);
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = movie && favorites.some((fav) => fav.id === movie.id);

  useEffect(() => {
    dispatch(fetchMovieDetails(id)); // Fetch movie details when the page loads
  }, [dispatch, id]);

  if (loading === "pending") return <p>Loading...</p>;
  if (!movie) return <p>Movie not found</p>;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  console.log(movie);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));

      TagManager.dataLayer({
        dataLayer: {
          event: "addToFavorites",
          movie: {
            id: movie.id,
            title: movie.title,
          },
        },
      });
    }
  };

  return (
    <div className="movie-details-container">
      <MetaTags
        title={movie.title}
        description={movie.overview}
        image={`${imageBaseUrl}${movie.poster_path}`}
        url={`https://movie-lab-ruddy.vercel.app/movie/${id}`}
      />
      <div className="movie-details">
        <img
          src={`${imageBaseUrl}${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>
            <strong>Release Year:</strong> {movie.release_date.slice(0, 4)}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average.toFixed(1)}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <button onClick={handleFavorite}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
