import React, { useState } from "react";
import { recipes } from "./../data/recipes";

function FilterBox() {
    const [showUstensils, setShowUstensils] = useState(false);

    const toggleUstensils = () => {
        setShowUstensils(!showUstensils);
    };

    const allUstensils = [
        ...new Set([].concat(...recipes.map((recipe) => recipe.ustensils))),
    ];

    return (
        <>
            <div className="dropdown mb-3 me-md-3">
                <div className="vertical-center">
                    <button onClick={toggleUstensils}>
                        {showUstensils ? "Cacher les ustensils" : "Ustensils"}
                    </button>
                    {showUstensils && (
                        <div>
                            {allUstensils.map((ustensil, index) => {
                                return <p key={index}>{ustensil}</p>;
                            })}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default FilterBox;
