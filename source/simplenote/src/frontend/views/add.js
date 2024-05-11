import { useEffect, useState } from "react";
import "../css/add.css"
import "../css/button.css"

function Add({ addItem }) {
    const [Item, SetItem] = useState({
        id: 0,
        time: 0,
        title: "",
        content: ""
    });

    const setTitle = (e) => {
        SetItem((prev) => {
            return {
                ...prev,
                id: Date.now(),
                time: Date.now(),
                title: e.target.value
            };
        })
    }

    const setContent = (e) => {
        SetItem((prev) => {
            return {
                ...prev,
                content: e.target.value
            };
        })
    }

    return (
        <div class="add-main">
            <input class="add-input" onChange={setTitle} placeholder="Title..."></input>
            <textarea class="add-placeholder" onChange={setContent} placeholder="Write your note here..."></textarea>
            <button onClick={() => addItem(Item)} class="btn">Add</button>
        </div>
    )
}

export default Add;