import React from "react";
import { Link, useParams } from "react-router-dom";
import { recipes } from "./../data/recipes";
import ErrorPage from "./../pages/ErrorPage";

function DetailRecipes() {
    const { id } = useParams();
    const post = recipes.find((item) => item.id === parseInt(id));

    if (!post) {
        return <ErrorPage />;
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
            <p>Temps : {post.time} min</p>
            <p>Appareil à utiliser : {post.appliance}</p>
        </div>
    );
}

export default DetailRecipes;
