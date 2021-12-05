import "./ItemDetail.css"
const ItemDetail = ({details}) => {

    return(
    <div className="card mb-3" style={{maxWidth: 1000, height: 420, margin: "auto", marginTop:30, paddingTop: 30}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img style={{ width: 220 }} src={details.picture} className="img-fluid rounded-start" alt="..."/>
            </div>

            <div className="col-md-8">
                <div className="card-body">
                    <h1 className="card-title">{details.name}</h1>
                    <p className="card-text aling">{details.details}</p>
                    <p className="card-text aling">Idioma: <span className="span">{details.language}</span></p>
                    <p className="card-text aling">Autor: <span className="span">{details.author}</span></p>
                    <p className="card-text aling">Formato: <span className="span">{details.format}</span></p>
                    <p className="card-text aling">Editorial: <span className="span">{details.publisher}</span></p>
                </div>
            </div>
        </div>
    </div>
    )
}

<span className="span"></span>

export default ItemDetail