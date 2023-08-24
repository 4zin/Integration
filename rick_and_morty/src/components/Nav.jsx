import SearchBar from "./SearchBar";
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, randomized }) => {
  return (
    <div>
      <Link to={`/home`}>
        <button>Home</button>
      </Link>
      <Link to={`/about`}>
        <button>About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <div>
        <button onClick={randomized}>Add random</button>
      </div>
    </div>
  );
};

export default Nav;
