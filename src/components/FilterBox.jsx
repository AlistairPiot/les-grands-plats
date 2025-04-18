import React from "react";
import { recipes } from "./../data/recipes";

function FilterBox() {
    return (
        <>
            <h2>Ustensils</h2>
            {recipes.map((recipe) => {
                <div key={recipe.id}>
                    {recipe.ustensils.map((ustensil, index) => {
                        return <p key={index}>{ustensil}</p>;
                    })}
                </div>;
            })}
        </>
    );
}

export default FilterBox;
