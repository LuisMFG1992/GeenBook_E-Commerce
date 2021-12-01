import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

function getItems() {
    return (new Promise ((resolve, reject) => {
                const products = [
                        {id: 1, name: "Iphone 12 Pro Max", price: 39000, stock:12, picture:"https://www.macstation.com.ar/img/productos/small/1680-1111.jpg", details: "Memoria: 128 GB, Pantalla: 6.7, Cámara frontal: 12 Mpx, Cámara trasera: 12 Mpx, Reconocimiento facial: Si"},
                        {id: 2, name: "Samsung S21 Ultra", price: 20000, stock:24, picture:"https://www.ktronix.com/medias/8806090953798-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNjI1Njl8aW1hZ2UvanBlZ3xpbWFnZXMvaDRiL2hiYS8xMDUxNzI4MTY2OTE1MC5qcGd8N2NhZGIxZWJiZTJhNDUyZGFjZjBlNTBlMjM3ZDMyNWEwMzFhYjk4MTdhMzZhZjEwZjA2MzFiY2Q3ZjY3OWFkOQ", details: ""},
                        {id: 3, name: "Xiaomi Black Shark", price: 225000, stock:32,  picture:"https://i.blogs.es/e6966a/black-shark-3-3-pro-09/450_1000.jpg", details: ""},
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

