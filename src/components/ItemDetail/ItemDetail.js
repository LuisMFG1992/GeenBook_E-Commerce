const ItemDetail = ({details}) => {

    return(

        <div className="cardSide">   
            <div className="card" details={details.id}>
                <img 
                    src={details.picture}
                    className="card-img-top imgSide"
                    alt="..."
                />
                <div className="card-body">
                    <h6 className="card-title">
                    {details.name}
                    </h6>
                    <h6 className="card-title">Precio: {details.price}$ <br></br></h6>
                    <h6 className="card-title">Stock: {details.stock}</h6>

                    <div className="card card-body">
                        {details.details}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail