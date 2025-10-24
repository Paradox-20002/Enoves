"use client";

import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./search.css";

export default function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  const handleChange = (e) => setSearchQuery(e.target.value);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".search-container")) {
        setIsSearchOpen(false);
      }
    };
    if (isSearchOpen) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isSearchOpen]);

  return (
    <div className="search-container">
      <button className="search-icon-btn" onClick={toggleSearch}>
        <FaSearch />
      </button>

      {isSearchOpen && (
        <div className="search-field">
          <input
            className="search-input"
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search..."
            autoFocus
          />
        </div>
      )}
    </div>
  );
}
