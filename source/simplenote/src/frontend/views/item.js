import "../css/item.css"
import React from "react";

function Item({ Items }) {

    return (
        Items.map(it => {
            return (
                <>
                    <div class="main-section">
                        <h1>{it.title}</h1>
                        <p>{it.content}</p>
                    </div>
                </>
            )
        })
    )
}

export default Item;