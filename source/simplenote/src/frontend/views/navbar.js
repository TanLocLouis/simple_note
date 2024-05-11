import "../css/navbar.css"
import Suffle from "./suffle";

function Navbar({ Suff }) {
    return (
        <nav>
            <Suffle Suff ={ Suff }/>
        </nav>
    )
}

export default Navbar;