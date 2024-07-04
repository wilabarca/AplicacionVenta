import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import '../Navar/Navar.css'
import Dropdown from "../../Moleculas/Dropdown/Dropdown";


const Navar = () => {
    return (
        <nav className="hol-3">
            <Dropdown></Dropdown>
            <a>Crear Cuenta</a>
            <a>Acerca de</a>
            <FontAwesomeIcon icon={faCartShopping} style={{
                color: "#000000", fontSize: "120%",
                marginRight: "19px",

            }} />
        </nav>
    );
}

export default Navar;

