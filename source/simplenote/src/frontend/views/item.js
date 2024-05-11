import "../css/item.css"
import React from "react";

function Item({ Items, handleRemove}) {
    return (
        Items.map(it => {
            return (
                <>
                    <div class="main-section">
                        <button onClick={() => handleRemove(it.id)} class="item-btn">X</button>
                        <h1>{it.title}</h1>
                        <p>{it.content}</p>
                    </div>
                </>
            )
        })
    )
}

export default Item;