import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../redux/features/movieDetailsSlice";
import MetaTags from "../components/MetaTags";

export default function MovieDetails() {
  const { id } = useParams(); // Get movie ID from route parameters
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieDetails.movie);
  const loading = useSelector((state) => state.movieDetails.loading);

  useEffect(() => {
    dispatch(fetchMovieDetails(id)); // Fetch movie details when the page loads
  }, [dispatch, id]);

  if (loading === "pending") return <p>Loading...</p>;
  if (!movie) return <p>Movie not found</p>;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <MetaTags
        title={movie.title}
        description={movie.overview}
        image={movie.poster_path}
      />
      <h1>{movie.title}</h1>
      <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
      <p>Release Date: {movie.release_date.slice(0, 4)}</p>
      <p>Overview: {movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
}
