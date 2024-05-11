import "../css/main.css"
import Item from "./item";
import Navbar from "./navbar";
import { useState } from "react";

function Main() {
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

    const Suff = () => {
        const newItems = [...Items];
        for (let i = 0; i < newItems.length; i++) {
            let j = Math.floor(Math.random() * (newItems.length - 1));
            let tmp = newItems[i];
            newItems[i] = newItems[j];
            newItems[j] = tmp;
        }
        SetItems(newItems);
    }

    const addItem = (Item) => {
        SetItems((prev) => {
            return [
                ...prev,
                Item
            ]
        })
    }

    const handleRemove = (id) => {
        SetItems((prev) => {
            return prev.filter(ele => (ele.id != id));
        })
    }

    return (
        <div class="main">
            <Navbar Suff={Suff} addItem={addItem}/>
            <Item Items={Items} handleRemove={handleRemove}/>
        </div>
    )
}

export default Main;