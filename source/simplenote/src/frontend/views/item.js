import "../css/item.css"
import React, { useState } from "react";

function Item() {
    const [Items, SetItems] = useState([
        {
            id: 1,
            time: 1000,
            title: "Card 1",
            content: "This is hehe"
        },
        {
            id: 2,
            time: 2000,
            title: "Card 2",
            content: "Hello everyone"
        },
        {
            id: 3,
            time: 3000,
            title: "Card 3",
            content: "Hello guys"
        },
        {
            id: 4,
            time: 3500,
            title: "Card 4",
            content: "Good guys"
        }
    ]);

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