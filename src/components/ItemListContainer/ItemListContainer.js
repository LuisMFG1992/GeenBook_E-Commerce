import React from "react";
import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { CATEGORIES } from "../CategoryFilter/Const"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { collection, getDocs} from "firebase/firestore"
import { db } from "../../Firebase/FirebaseConfig"      

const ItemListContainer = () => {

    const { category } = useParams()

    const [productList, setProductsList] = useState([])

    const [filteredProductList , setFilteredProductList] = useState([])

    useEffect(() => {

        getDocs(collection(db, "products")).then((querySnapshot) => {
            const fbProducts = querySnapshot.docs.map( doc => {
                return { id: doc.id, ...doc.data()}
            })

            setProductsList(fbProducts)
        })

    }, [])

    console.log(`Productos Firebase =>`, productList)

    useEffect(() => {
        
        let newProductList = []

        switch (category) {

            case CATEGORIES.Action:
                newProductList = productList.filter( book => book.category === CATEGORIES.Action )
                setFilteredProductList(newProductList)
                break
        
            case CATEGORIES.Love:
                newProductList = productList.filter( book => book.category === CATEGORIES.Love )
                setFilteredProductList(newProductList)            
                break
            
            case CATEGORIES.Thriler:
                newProductList = productList.filter( book => book.category === CATEGORIES.Thriler )
                setFilteredProductList(newProductList)                        
                break
            
            default:
                setFilteredProductList(productList)
                break;
        }

    }, [category, productList])

    return (      
        <ItemList items={category ? filteredProductList : productList}/>
    )
}

export default ItemListContainer