import React from "react";
import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"           
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../Firebase/FirebaseConfig"

const ItemDetailContainer = ({id}) => {

    const [productItem, setproductItem] = useState([])

    useEffect(() => {
       
        getDoc(doc(db, "products", id)).then(querySnapshot => {
            const fbProduct = {id: querySnapshot.id, ...querySnapshot.data()}
            setproductItem(fbProduct)
        })

    }, [id])


    return (
        <>
            <ItemDetail details={productItem}/>
        </>
    )
}

export default ItemDetailContainer