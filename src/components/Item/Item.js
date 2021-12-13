import "./Item.css"

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
                    <a href={`/details/${id}`} className="btn btn-success">Ver mas detalles</a>
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