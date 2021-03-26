import React from "react";

function Search({ handleChange, searchTerm }) {

  return (
    <div className="filter">
      <input id="search-bar" name="string" type="text" placeholder="Search Tracks" value={searchTerm.string} onChange={handleChange}/>
      <select name="attribute" value={searchTerm.attribute} onChange={handleChange}>
        <option value="title">Title</option>
        <option value="artist">Artist</option>
      </select>
    </div>
  );
}


export default Search;
