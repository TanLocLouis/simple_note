import "../css/navbar.css"
import Button from "./button";

function Navbar() {
    return (
        <nav>
            <Button content={"Add"}/>
            <Button content={"Suffle"}/>
            <Button content={"Newest"}/>
        </nav>
    )
}

export default Navbar;