import "../css/navbar.css"
import Add from "./add";
import Suffle from "./suffle";

function Navbar({ Suff, addItem }) {
    return (
        <nav>
            <Add addItem={ addItem }/>
            <Suffle Suff ={ Suff }/>
        </nav>
    )
}

export default Navbar;