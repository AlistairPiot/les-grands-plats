import React from "react";
import Header from "../components/Header";
import Tag from "../components/Tag";
import imgSearch from "./../assets/img/search.svg";
import FilterBox from "../components/FilterBox";
import RecipesList from "../components/RecipesList";

function Home() {
  return (
    <div className="div">
      <div className="mx-auto">
        <Header />
        <main id="main">
          <div className="container">
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
                  />
                  <div className="search-img position-absolute top-50 translate-middle">
                    <img className="search-logo" alt="" src={imgSearch} />
                  </div>
                </form>
              </div>
            </div>
            <Tag />
            <div className="btn-group mb-4">
              <FilterBox />
            </div>
            <RecipesList />
          </div>
        </main>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
      </div>
    </div>
  );
}

export default Home;
