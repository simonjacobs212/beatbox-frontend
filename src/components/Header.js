import React from "react";
import NavBar from "./NavBar";
import Search from "./Search"

function Header({ onChangePage, handleChange, searchTerm }) {
    return (
        <div>
            <NavBar onChangePage={onChangePage} />
            <Search handleChange={handleChange} searchTerm={searchTerm}/>
        </div>
    )
}

export default Header;