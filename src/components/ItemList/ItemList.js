import React from "react";
import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({items}) => {
    return (
        <div className="rows">
            { items.map( i => <Item className="rows" id={i.id} key={i.id} name={i.name} boton={i.boton} price={i.price} stock={i.stock} picture={i.picture} details={i.details} /> ) }
        </div>
    )
}

export default ItemList