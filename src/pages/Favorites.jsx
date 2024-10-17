import { useDispatch } from "react-redux";
import { clearFavorites } from "../redux/features/favoritesSlice";
import FavoritesList from "../components/FavoritesList";

export default function Favorites() {
  const dispatch = useDispatch();

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
  };
  return (
    <div>
      <h1>Your Favorite Movies</h1>{" "}
      <button onClick={handleClearFavorites}>Remove all favorites</button>
      <FavoritesList />
    </div>
  );
}
