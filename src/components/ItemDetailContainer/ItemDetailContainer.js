import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { products } from "../ItemListContainer/ItemListContainer"
import ItemDetail from "../ItemDetail/ItemDetail"           

const getItem = () => {
    return (new Promise ((resolve, reject) => {
                setTimeout(() => {resolve(products[0])}, 2000)        
            }
        )   
    )    
}

const ItemDetailContainer = () => {

    const [productItem, setproductItem] = useState([])

    useEffect(() => {
        const detail = getItem()
            detail.then((response) => {
            setproductItem(response)
        })

    }, [])

    return (
        <>
            <ItemDetail details={productItem}/>
        </>
    )
}

export default ItemDetailContainer