import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchSuggestions,
  clearSuggestions,
} from "../redux/features/searchSlice";
import { useNavigate } from "react-router-dom";
import SearchResultItem from "./SearchResultItem";
import "./styles/searchBar.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const suggestions = useSelector((state) => state.search.suggestions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length > 0) {
      dispatch(fetchSearchSuggestions(value));
    } else {
      dispatch(clearSuggestions());
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      dispatch(clearSuggestions());
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/movie/${suggestion.id}`);
    setSearchTerm("");
    dispatch(clearSuggestions());
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(clearSuggestions());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div className="search-bar-container" ref={dropdownRef}>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Overlayed Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="suggestions-overlay">
          {suggestions.map((suggestion) => (
            <SearchResultItem
              key={suggestion.id}
              movie={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
