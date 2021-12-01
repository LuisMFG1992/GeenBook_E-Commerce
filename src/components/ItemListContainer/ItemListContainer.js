import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

function getItems() {
    return (new Promise ((resolve, reject) => {
                const products = [
                        {id: 1, name: "Geen Book", price: 1000, stock:10},
                        {id: 2, name: "Biblia", price: 2000, stock:20},
                        {id: 3, name: "Divina comedia", price: 3000, stock:30},
                ]
                
                setTimeout(() => {resolve(products)}, 2000)
                
            }
        )   
    )    
}



const ItemListContainer = ({greeting}) => {

    const [productList, setProductsList] = useState([])

    useEffect(() => {
        const list = getItems()
            list.then((response) => {
            setProductsList(response)
        })

    }, [])

    return (
        <>
            <ItemCount stock={10} inicial={1} onAdd="Cantidad de productos agregados al carrito:"/>
    
            <ItemList items={productList}/>
        </>
    )
}

export default ItemListContainer