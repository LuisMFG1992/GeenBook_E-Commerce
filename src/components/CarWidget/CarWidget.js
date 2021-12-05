import "./CarWidget.css"

const CarWidget = () => {
    return (
        <div>
             <ul className="navbar-nav">    
                <li className="nav-item">
                <img className="carWidget" alt="carWidget" src="https://icones.pro/wp-content/uploads/2021/05/symbole-charrette-verte.png"/>
                </li>

                <li className="nav-item">
                <a href="CarWidget" className="nav-link numeroCarrito itemListContainer">10</a>
                </li>
            </ul>

        </div>
    )
}

export default CarWidget