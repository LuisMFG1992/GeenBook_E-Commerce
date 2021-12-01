import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"
import { useEffect } from "react"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

    // useEffect(() => {
    //     const list = productos ()

    //     list.then((respuesta) => {

    //     })

    // }, [])

    return (
        <>
        <h3>{greeting}</h3>
        <ItemCount stock={10} inicial={1} onAdd="Cantidad de productos agregados al carrito:"/>
        <ItemList />
        </>
        // <ItemList />
    )
}

export default ItemListContainer