import "./styles/searchResultItem.css";

const SearchResultItem = ({ movie, onClick }) => {
  const { title, release_date, poster_path, id } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const year = release_date ? release_date.split("-")[0] : "Unknown Year";

  return (
    <div className="search-result-item" onClick={onClick}>
      <img src={posterUrl} alt={`${title} poster`} />
      <div className="search-details">
        <h4>{title}</h4>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default SearchResultItem;
