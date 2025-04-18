import React from "react";
import imgSearch from "./../assets/img/search.svg";

function SearchBar({ searchText, setSearchText }) {
    return (
        <div className="mb-4 row">
            <div className="search position-relative">
                <form id="form" role="search" autoComplete="off">
                    <label className="visually-hidden" htmlFor="search">
                        Main search
                    </label>
                    <input
                        id="search"
                        className="search-input col-12 rounded"
                        type="text"
                        placeholder="Rechercher un ingrédient, appareil, ustensiles ou une recette"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <div className="search-img position-absolute top-50 translate-middle">
                        <img className="search-logo" alt="" src={imgSearch} />
                    </div>
                </form>
            </div>
            <p>Tu recherches : {searchText}</p>
        </div>
    );
}

export default SearchBar;
