import React from "react";
import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { useContext } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"           
import { ContextoTema } from "../../Context/CartContext"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../Firebase/FirebaseConfig"

const ItemDetailContainer = ({id}) => {

    const {getItem} = useContext(ContextoTema)

    const [productItem, setproductItem] = useState([])

    useEffect(() => {
       
        getDoc(doc(db, "products", id)).then(querySnapshot => {
            const fbProduct = {id: querySnapshot.id, ...querySnapshot.data()}
            setproductItem(fbProduct)
        })

    }, [id, getItem])

    return (
        <>
            <ItemDetail details={productItem}/>
        </>
    )
}

export default ItemDetailContainer

// const detail = getItem(id)
// detail.then((response) => {
// setproductItem(response)
// })