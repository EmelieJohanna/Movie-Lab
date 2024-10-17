import { useDispatch } from "react-redux";
import { clearFavorites } from "../redux/features/favoritesSlice";
import FavoritesList from "../components/FavoritesList";
import MetaTags from "../components/MetaTags";

export default function Favorites() {
  const pageUrl = "https://movie-lab-ruddy.vercel.app/favorites";

  const dispatch = useDispatch();

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
  };
  return (
    <div>
      <MetaTags
        title="Your Favorite Movies | Movie Lab"
        description="Browse your curated list of favorite movies on Movie Lab. Revisit and enjoy your top picks."
        url={pageUrl}
      />
      <h1>Your Favorite Movies</h1>
      <button onClick={handleClearFavorites}>Remove all favorites</button>
      <FavoritesList />
    </div>
  );
}
