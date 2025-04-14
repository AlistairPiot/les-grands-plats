import React from "react";
import tagClose from "./../assets/img/tag-close.svg";

function Tag() {
    return (
        <div id="tags-container" className="mb-2 d-flex flex-wrap">
            <div
                id="lait-de-coco"
                className="tags badge tag-lait-de-coco bg-primary ps-3 pe-2 py-2 me-3 mb-2 rounded"
            >
                <span>Lait de coco</span>
                <button
                    id="btn-close-lait-de-coco"
                    type="button"
                    className="tag-close-btn align-middle ms-1"
                    aria-label="Close"
                >
                    <img src={tagClose} alt="" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}

export default Tag;
