import React from "react";
import FilterBox from "../components/FilterBox";
import Header from "../components/Header";
import RecipesList from "../components/RecipesList";
import Tag from "../components/Tag";
import SearchBar from "./../components/SearchBar";

function Home() {
    return (
        <div className="div">
            <div className="mx-auto">
                <Header />
                <main id="main">
                    <div className="container">
                        <SearchBar />
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
