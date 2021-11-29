import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) => {

    return (
        <>
        <h3>{greeting}</h3>
        <ItemCount stock={10} inicial={1} onAdd="Cantidad de productos agregados al carrito:"/>
        </>
    )
}

export default ItemListContainer