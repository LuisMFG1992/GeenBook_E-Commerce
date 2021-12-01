import "./Item.css"

const Item = ({id, name, price, stock, picture, details, boton}) => {

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
                    <h7 className="card-title">Precio: {price}$ <br></br></h7>
                    <h7 className="card-title">Stock: {stock}</h7>
                    <p>
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        Ver mas detalles
                    </a>
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