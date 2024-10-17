const MovieCard = ({ movie }) => {
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
    </div>
  );
};

export default MovieCard;
