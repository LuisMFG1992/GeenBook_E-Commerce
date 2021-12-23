import "./CarWidget.css"
import { useContext } from "react"
import { ContextoTema } from "../../Context/CartContext"
import { NavLink } from "react-router-dom"

const CarWidget = () => {

    const {totalQuantity} = useContext(ContextoTema)

  

    return (
        <div>
             <NavLink to={"/cart"} className="navbar-nav">    
                <li className="nav-item">
                <img className="carWidget" alt="carWidget" src="https://icones.pro/wp-content/uploads/2021/05/symbole-charrette-verte.png"/>
                </li>

                <li className="nav-item">
                <div className="nav-link numeroCarrito itemListContainer">{totalQuantity}</div>
                </li>
            </NavLink>

        </div>
    )
}

export default CarWidget