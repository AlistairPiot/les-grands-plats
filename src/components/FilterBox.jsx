import React from "react";
import imgDropdown from "./../assets/img/dropdown.svg";
import { recipes } from "./../data/recipes"; // adapte le chemin selon ton projet

function FilterBox() {
  // Extraire les ustensiles uniques de toutes les recettes
  const allUstensils = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.ustensils.map((u) => u.toLowerCase().trim())
      )
    )
  );

  return (
    <>
      {/* ... autres dropdowns (Appliance, etc) ... */}

      <div className="dropdown mb-3 me-md-3">
        <div
          className="btn btn-danger btn-lg dropdown-toggle btn-ustensils"
          id="dropdownUstensils"
          data-bs-toggle="dropdown"
          data-bs-offset="0,0"
        >
          <div className="vertical-center">
            <span className="btn-tag-title">Ustensiles</span>
            <img
              src={imgDropdown}
              alt=""
              className="ms-3 dropdown-arrow"
              aria-hidden="true"
            />
            <form
              id="form-ustensil"
              role="search"
              autoComplete="off"
              className="hide"
            >
              <label className="visually-hidden" htmlFor="search-ustensil">
                Ustensil Tag Search
              </label>
              <input
                id="search-ustensil"
                className="search-input col-12 rounded"
                type="text"
                placeholder="Rechercher un ustensile"
              />
            </form>
          </div>
        </div>

        <div
          className="dropdown-menu ustensils-dropdown rounded-0 rounded-bottom"
          aria-labelledby="dropdownUstensils"
        >
          <ul id="ustensils-list">
            {allUstensils.map((ustensil, index) => (
              <li key={index} className="tags-ustensils">
                <button
                  className="dropdown-item btn-tag-ustensil"
                  type="button"
                  value={ustensil}
                >
                  {ustensil.charAt(0).toUpperCase() + ustensil.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FilterBox;
