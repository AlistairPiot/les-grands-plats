import { Link } from "react-router-dom";
import pasta from "./../assets/img/pasta.jpg";
import watchTime from "./../assets/img/watch-time.svg";

function RecipesList({ recipesPlats }) {
    return (
        <div
            id="recipes-list"
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
        >
            {recipesPlats.map((recipe) => (
                <div className="col" key={recipe.id}>
                    <Link to={`/plat/${recipe.id}`}>Détail</Link>
                    <div className="card h-100">
                        <div className="card-img-top">
                            <img src={pasta} alt="image d'un plat de pâte" />
                        </div>
                        <div className="card-body">
                            <div className="row mb-2">
                                <h2 className="card-title col-8 card-name">
                                    {recipe.name}
                                </h2>
                                <div className="card-title col-4 text-end card-time-container">
                                    <img
                                        className="me-1 card-time-watch"
                                        alt=""
                                        src={watchTime}
                                    />
                                    <span className="card-time">
                                        {recipe.time} min
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <ul className="card-text col-6 list-unstyled card-ingredients-list">
                                    {recipe.ingredients.map((item, index) => (
                                        <li
                                            className="card-ingredients-list-item"
                                            key={index}
                                        >
                                            <span className="card-ingredients-list-item-ingredient">
                                                {item.ingredient}
                                            </span>
                                            <span className="card-ingredients-list-item-quantity">
                                                {item.quantity
                                                    ? `: ${item.quantity}`
                                                    : ""}
                                            </span>
                                            <span className="card-ingredients-list-item-unit">
                                                {item.unit
                                                    ? ` ${item.unit}`
                                                    : ""}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="card-text col-6 card-description">
                                    {recipe.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RecipesList;
