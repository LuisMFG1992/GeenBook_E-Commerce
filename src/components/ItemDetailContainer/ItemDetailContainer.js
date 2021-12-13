import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { products } from "../ItemListContainer/ItemListContainer"
import ItemDetail from "../ItemDetail/ItemDetail"           

const getItem = (id) => {
    return (new Promise ((resolve, reject) => {
                setTimeout(() => {resolve(products[id])}, 2000)        
            }
        )   
    )    
}

const ItemDetailContainer = ({id}) => {

    const [productItem, setproductItem] = useState([])

    useEffect(() => {
        const detail = getItem(id)
            detail.then((response) => {
            setproductItem(response)
        })

    }, [id])

    return (
        <>
            <ItemDetail details={productItem}/>
        </>
    )
}

export default ItemDetailContainer