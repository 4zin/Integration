import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="id..."
        onChange={handleChange}
        value={id}
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
