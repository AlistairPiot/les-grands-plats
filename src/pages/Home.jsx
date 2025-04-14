import React from "react";
import Header from "../components/Header";
import Tag from "../components/Tag";
import imgDropdown from "./../assets/img/dropdown.svg";
import imgSearch from "./../assets/img/search.svg";
import watchTime from "./../assets/img/watch-time.svg";

function Home() {
    return (
        <div className="div">
            <div className="mx-auto">
                <Header />
                <main id="main">
                    <div className="container">
                        <div className="mb-4 row">
                            <div className="search position-relative">
                                <form
                                    id="form"
                                    role="search"
                                    autocomplete="off"
                                >
                                    <label
                                        className="visually-hidden"
                                        for="search"
                                    >
                                        Main search
                                    </label>
                                    <input
                                        id="search"
                                        className="search-input col-12 rounded"
                                        type="text"
                                        placeholder="Rechercher un ingrédient, appareil, ustensiles ou une recette"
                                    />
                                    <div className="search-img position-absolute top-50 translate-middle">
                                        <img
                                            className="search-logo"
                                            alt=""
                                            src={imgSearch}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Tag />
                        <div className="btn-group mb-4">
                            <div className="dropdown mb-3 me-md-3">
                                <div
                                    className="btn btn-primary btn-lg dropdown-toggle btn-ingredients btn-tag-open rounded-0 rounded-top show"
                                    id="dropdownIngredients"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,0"
                                    aria-expanded="true"
                                    disabled="false"
                                >
                                    <div className="vertical-center">
                                        <span className="btn-tag-title hide">
                                            Ingrédients
                                        </span>
                                        <img
                                            src={imgDropdown}
                                            alt=""
                                            className="ms-3 dropdown-arrow"
                                            aria-hidden="true"
                                        />
                                        <form
                                            id="form-ingredient"
                                            role="search"
                                            autocomplete="off"
                                            className=""
                                        >
                                            <label
                                                className="visually-hidden"
                                                for="search-ingredient"
                                            >
                                                Ingredient Tag Search
                                            </label>

                                            <input
                                                id="search-ingredient"
                                                className="search-input col-12 rounded"
                                                type="text"
                                                placeholder="Rechercher un ingrédient"
                                            />
                                        </form>
                                    </div>
                                </div>
                                {/*
                                <div
                                    className="dropdown-menu ingredients-dropdown rounded-0 rounded-bottom show"
                                    aria-labelledby="dropdownIngredients"
                                    style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 80px, 0px)"
                                    data-popper-placement="bottom-start"
                                >
                                    <ul id="ingredients-list">
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="lait de coco"
                                            >
                                                Lait de coco
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="jus de citron"
                                            >
                                                Jus de citron
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="crème de coco"
                                            >
                                                Crème de coco
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="sucre"
                                            >
                                                Sucre
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="glaçons"
                                            >
                                                Glaçons
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="thon rouge (ou blanc)"
                                            >
                                                Thon rouge ou blanc
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="concombre"
                                            >
                                                Concombre
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="tomate"
                                            >
                                                Tomate
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="carotte"
                                            >
                                                Carotte
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="citron vert"
                                            >
                                                Citron vert
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="poulet"
                                            >
                                                Poulet
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="coulis de tomate"
                                            >
                                                Coulis de tomate
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="oignon"
                                            >
                                                Oignon
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="poivron rouge"
                                            >
                                                Poivron rouge
                                            </button>
                                        </li>
                                        <li className='"tags-ingredients"'>
                                            <button
                                                className="dropdown-item btn-tag-ingredient"
                                                type="button"
                                                value="huile d'olive"
                                            >
                                                Huile d'olive
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                */}
                            </div>
                            <div className="dropdown mb-3 me-md-3">
                                <div
                                    className="btn btn-success btn-lg dropdown-toggle btn-appliance"
                                    id="dropdownAppliances"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,0"
                                >
                                    <div className="vertical-center">
                                        <span className="btn-tag-title">
                                            Appareil
                                        </span>
                                        <img
                                            src={imgDropdown}
                                            alt=""
                                            className="ms-3 dropdown-arrow"
                                            aria-hidden="true"
                                        />
                                        <form
                                            id="form-appliance"
                                            role="search"
                                            autocomplete="off"
                                            className="hide"
                                        >
                                            <label
                                                className="visually-hidden"
                                                for="search-appliance"
                                            >
                                                Appliance Tag Search
                                            </label>
                                            <input
                                                id="search-appliance"
                                                className="search-input col-12 rounded"
                                                type="text"
                                                placeholder="Rechercher un appareil"
                                            />
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="dropdown-menu appliances-dropdown rounded-0 rounded-bottom"
                                    aria-labelledby="dropdownAppliances"
                                >
                                    <ul id="appliances-list">
                                        <li className='"tags-appliances"'>
                                            <button
                                                className="dropdown-item btn-tag-appliance"
                                                type="button"
                                                value="blender"
                                            >
                                                Blender
                                            </button>
                                        </li>
                                        <li className='"tags-appliances"'>
                                            <button
                                                className="dropdown-item btn-tag-appliance"
                                                type="button"
                                                value="saladier"
                                            >
                                                Saladier
                                            </button>
                                        </li>
                                        <li className='"tags-appliances"'>
                                            <button
                                                className="dropdown-item btn-tag-appliance"
                                                type="button"
                                                value="cocotte"
                                            >
                                                Cocotte
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="dropdown mb-3 me-md-3">
                                <div
                                    className="btn btn-danger btn-lg dropdown-toggle btn-ustensils"
                                    id="dropdownUstensils"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,0"
                                >
                                    <div className="vertical-center">
                                        <span className="btn-tag-title">
                                            Ustensiles
                                        </span>
                                        <img
                                            src={imgDropdown}
                                            alt=""
                                            className="ms-3 dropdown-arrow"
                                            aria-hidden="true"
                                        />
                                        <form
                                            id="form-ustensil"
                                            role="search"
                                            autocomplete="off"
                                            className="hide"
                                        >
                                            <label
                                                className="visually-hidden"
                                                for="search-ustensil"
                                            >
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
                                        <li className='"tags-ustensils"'>
                                            <button
                                                className="dropdown-item btn-tag-ustensil"
                                                type="button"
                                                value="cuillère à soupe"
                                            >
                                                Cuillère à soupe
                                            </button>
                                        </li>
                                        <li className='"tags-ustensils"'>
                                            <button
                                                className="dropdown-item btn-tag-ustensil"
                                                type="button"
                                                value="verres"
                                            >
                                                Verres
                                            </button>
                                        </li>
                                        <li className='"tags-ustensils"'>
                                            <button
                                                className="dropdown-item btn-tag-ustensil"
                                                type="button"
                                                value="presse citron"
                                            >
                                                Presse citron
                                            </button>
                                        </li>
                                        <li className='"tags-ustensils"'>
                                            <button
                                                className="dropdown-item btn-tag-ustensil"
                                                type="button"
                                                value="couteau"
                                            >
                                                Couteau
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            id="recipes-list"
                            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
                        >
                            <div className="col" id="1">
                                <div className="card h-100">
                                    <div className="card-img-top"></div>
                                    <div className="card-body">
                                        <div className="row mb-2">
                                            <h2 className="card-title col-8 card-name">
                                                Limonade de Coco
                                            </h2>
                                            <div className="card-title col-4 text-end card-time-container">
                                                <img
                                                    className="me-1 card-time-watch"
                                                    alt=""
                                                    src={watchTime}
                                                />
                                                <span className="card-time">
                                                    10 min
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <ul className="card-text col-6 list-unstyled card-ingredients-list">
                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Lait de coco
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Jus de citron
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Crème de coco
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Sucre
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Glaçons
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>
                                            </ul>
                                            <p className="card-text col-6 card-description">
                                                Mettre les glaçons à votre goût
                                                dans le blender, ajouter le
                                                lait, la crème de coco, le jus
                                                de 2 citrons et le sucre. Mixer
                                                jusqu'à avoir la consistence
                                                désirée
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col" id="2">
                                <div className="card h-100">
                                    <div className="card-img-top"></div>
                                    <div className="card-body">
                                        <div className="row mb-2">
                                            <h2 className="card-title col-8 card-name">
                                                Poisson Cru à la tahitienne
                                            </h2>
                                            <div className="card-title col-4 text-end card-time-container">
                                                <img
                                                    className="me-1 card-time-watch"
                                                    alt=""
                                                    src={watchTime}
                                                />
                                                <span className="card-time">
                                                    60 min
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <ul className="card-text col-6 list-unstyled card-ingredients-list">
                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Thon Rouge (ou blanc)
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Concombre
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Tomate
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Carotte
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Citron Vert
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Lait de Coco
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>
                                            </ul>
                                            <p className="card-text col-6 card-description">
                                                Découper le thon en dés, mettre
                                                dans un plat et recouvrir de jus
                                                de citron vert mieux vaut
                                                prendre un plat large et peu
                                                profond. Laisser reposer au
                                                réfrigérateur au moins 2 heures.
                                                S…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col" id="3">
                                <div className="card h-100">
                                    <div className="card-img-top"></div>
                                    <div className="card-body">
                                        <div className="row mb-2">
                                            <h2 className="card-title col-8 card-name">
                                                Poulet coco réunionnais
                                            </h2>
                                            <div className="card-title col-4 text-end card-time-container">
                                                <img
                                                    className="me-1 card-time-watch"
                                                    alt=""
                                                    src={watchTime}
                                                />
                                                <span className="card-time">
                                                    80 min
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <ul className="card-text col-6 list-unstyled card-ingredients-list">
                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Poulet
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Lait de coco
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Coulis de tomate
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Oignon
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Poivron rouge
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>

                                                <li className="card-ingredients-list-item">
                                                    <span className="card-ingredients-list-item-ingredient">
                                                        Huile d'olive
                                                    </span>
                                                    <span className="card-ingredients-list-item-quantity"></span>
                                                    <span className="card-ingredients-list-item-unit"></span>
                                                </li>
                                            </ul>
                                            <p className="card-text col-6 card-description">
                                                Découper le poulet en morceaux,
                                                les faire dorer dans une cocotte
                                                avec de l'huile d'olive. Salez
                                                et poivrez. Une fois doré,
                                                laisser cuire en ajoutant de
                                                l'eau. Au bout de 30 minutes,
                                                ajo…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
