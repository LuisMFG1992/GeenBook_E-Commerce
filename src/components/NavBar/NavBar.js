import "./NavBar.css"
import CarWidget from '../CarWidget/CarWidget';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ContextoTema } from "../../Context/CartContext";

const NavBar = () => {

    const { carProducts } = useContext(ContextoTema)

    
    return (
        <>
     
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-success" to="/" >Green Book</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link link-nav active" to="/" aria-current="page">Inicio</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link link-nav" to="/libros">Libros</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link link-nav" to="/novedades">Novedades</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link link-nav" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                    {carProducts.length === 0 ? 
                        <ul className="navbar-nav" style={{opacity: "0.3"}}>
                            <CarWidget/>
                        </ul> 
                    : 
                        <ul className="navbar-nav">
                            <CarWidget/>
                        </ul>
                    }
                    </div>
                </div>
            </nav>

        </div>
        </>
    )
}

export default NavBar