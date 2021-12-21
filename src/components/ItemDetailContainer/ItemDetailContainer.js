import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { useContext } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"           
import { ContextoTema } from "../../Context/CartContext"

const ItemDetailContainer = ({id}) => {

    const {getItem} = useContext(ContextoTema)

    const [productItem, setproductItem] = useState([])

    useEffect(() => {
        const detail = getItem(id)
            detail.then((response) => {
            setproductItem(response)
        })

    }, [id, getItem])

    return (
        <>
            <ItemDetail details={productItem}/>
        </>
    )
}

export default ItemDetailContainer