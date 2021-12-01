import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({items}) => {
    return (
        <div>
            { items.map( i => <Item key={i.id} name={i.name} price={i.price} stock={i.stock} /> ) }
        </div>
    )
}

export default ItemList