import React, { useEffect, useState } from "react";
import "./search.css";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("Item list")) || [];
    const filteredList = list.filter((item) =>
      item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    onSearch(filteredList);
  }, [searchQuery, onSearch]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="searchContainer">
      <div className="search">
        <input
          type="search"
          placeholder="Search an item"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default Search;
