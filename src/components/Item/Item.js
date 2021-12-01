import "./Item.css"

const Item = ({id, name, price, stock, picture, details}) => {

    return (
        <div className="cardSide">   
            <div className="card">
                <img 
                    src={picture}
                    className="card-img-top imgSide"
                    alt="..."
                />
                <div className="card-body">
                    <h7 className="card-title">
                    {name}
                    </h7>
                    <h6 className="card-title">{price}$</h6>
                    <h6 className="card-title">Stock: {stock}</h6>
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