import React from "react";
import "./Item.css"
import { NavLink } from "react-router-dom"

const Item = ({id, name, price, stock, picture, details}) => {

    return (
        <div className="cardSide">   
            <div className="card" key={id}>
                <img 
                    src={picture}
                    className="card-img-top imgSide"
                    alt="..."
                />
                <div className="card-body">
                    <h6 className="card-title">
                    {name}
                    </h6>
                    <h6 className="card-title">Precio: {price}$ <br></br></h6>
                    <h6 className="card-title">Stock: {stock}</h6>
                    <p>
                    <NavLink to={`/details/${id}`} className="btn btn-success">Ver mas detalles</NavLink>
                    </p>

                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                          {details}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
        
export default Item