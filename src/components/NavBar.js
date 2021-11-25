import "./NavBar.css"
import CarWidget from './CarWidget/CarWidget';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-success" href="#">Green Book</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link link-nav active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link link-nav" href="#">Libros</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link link-nav" href="#">Novedades</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link link-nav">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <CarWidget/>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar