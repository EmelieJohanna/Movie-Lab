import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaHome, FaRegHeart } from "react-icons/fa";
import { CiHome } from "react-icons/ci";

export default function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <FaHome size={30} />
      </Link>

      <SearchBar />

      <Link to="/favorites">
        <FaRegHeart size={30} />
      </Link>
    </nav>
  );
}
