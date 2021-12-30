import React from "react";
import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { CATEGORIES } from "../CategoryFilter/Const"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { collection, getDocs } from "firebase/firestore"

export const products = [
        {id: 0, category: "Action", language: "Español", name: "Los juegos del hambre", price: 3000, stock:12, picture:"https://resizer.glanacion.com/resizer/suy1HpCxm3uXtRpgIIaxe3U-TJI=/879x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/JVKCYEBTMVG4BKCGWCT7ZJAFKI.jpg", details: "Katniss Everdeen se encuentra en el Distrito 13 después de destrozar los juegos para siempre. Bajo el liderazgo de la comandante Coin y el consejo de sus amigos más leales, Katniss extiende sus alas mientras lucha por salvar a Peeta Mellark y a una nación alentada por su valentía.", author: "Suzanne Collins", format: "PDF", publisher: "RBA"},
        {id: 1, category: "Love", language: "Ingles", name: "Yo antes de ti", price: 1000, stock:24, picture:"https://resizer.glanacion.com/resizer/kkcv3KJ2g8r-qGLL6I6w3s_BjxA=/879x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/DQ3VRVI275DJTALLXP66C7CZ4E.jpg", details: "Qué decidirías cuando hacer feliz a la persona a la que amas significa también destrozarte el corazón? Una bella historia llena de momentos de profundo amor y momentos en los que te preguntas: ¿qué haría yo si estuviese en el lugar de Louisa Clark.", author: "Jojo Moyes", format: "PDF", publisher: "Debolsillo"},
        {id: 2, category: "Thriler", language: "Español", name: "Bajo la misma estrella", price: 2000, stock:32,  picture:"https://resizer.glanacion.com/resizer/aTflbqSQr_qpbI0rCfBZqlnWGfI=/879x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/Q55WBPUFOZHW7IPGL4RMQXRCI4.jpg", details: "La historia comienza con una protagonista llamada Hazel con diagnóstico de cáncer, un día, en un grupo de terapia conoce a Gus, que también ha tenido la enfermedad. Una novela que te hará saltar lágrimas desde la primera página hasta el final del libro.", author: "John Green", format: "PDF", publisher: "Nube de Tinta"},
]


const getProducts = () => {
    return (new Promise ((resolve, reject) => {
                setTimeout(() => {resolve(products)}, 2000)        
            }
        )   
    )    
}        

const ItemListContainer = () => {

    const { category } = useParams()

    const [productList, setProductsList] = useState([])

    const [filteredProductList , setFilteredProductList] = useState([])

    useEffect(() => {

        
        const list = getProducts()
            list.then((response) => {
            setProductsList(response)
        })

    }, [category])

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