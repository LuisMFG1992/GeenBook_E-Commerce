import "./Item.css"

const Item = ({id, name, price, stock}) => {

    return (
        <di>
            <p>{name}</p>
            <p>{price}</p>
            <p>{stock}</p>
        </di>
    )
}
        
export default Item