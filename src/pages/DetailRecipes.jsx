import React from "react";
import { Link, useParams } from "react-router-dom";
import { recipes } from "./../data/recipes";

function DetailRecipes() {
    const { id } = useParams();
    const post = recipes.find((item) => item.id === parseInt(id));

    if (!post) {
        return (
            <>
                <Link to={`/`}>Revenir sur l'accueil</Link>
                <p>Mauvaise id dans l'URL.</p>
                <p>Ce n'est pas une recette.</p>
            </>
        );
    }

    return (
        <div>
            <Link to={`/`}>Revenir sur l'accueil</Link>
            <h1>{post.name}</h1>
            <p>{post.description}</p>
            {post.ingredients.map((item, index) => (
                <li key={index}>
                    <p>
                        {item.ingredient} : {item.quantity}
                    </p>
                </li>
            ))}
            {post.ustensils.map((item, index) => (
                <li key={index}>
                    <p>Ustensiles : {item}</p>
                </li>
            ))}
            <p>Temps : {post.time} min</p>
            <p>Appareil à utiliser : {post.appliance}</p>
        </div>
    );
}

export default DetailRecipes;
