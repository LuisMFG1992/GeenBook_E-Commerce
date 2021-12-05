import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const products = [
        {id: 1, boton: "", name: "Los juegos del hambre", price: 3000, stock:12, picture:"https://resizer.glanacion.com/resizer/suy1HpCxm3uXtRpgIIaxe3U-TJI=/879x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/JVKCYEBTMVG4BKCGWCT7ZJAFKI.jpg", details: "Katniss Everdeen se encuentra en el Distrito 13 después de destrozar los juegos para siempre. Bajo el liderazgo de la comandante Coin y el consejo de sus amigos más leales, Katniss extiende sus alas mientras lucha por salvar a Peeta Mellark y a una nación alentada por su valentía.."},
        {id: 2, boton: "", name: "Yo antes de ti", price: 1000, stock:24, picture:"https://resizer.glanacion.com/resizer/kkcv3KJ2g8r-qGLL6I6w3s_BjxA=/879x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/DQ3VRVI275DJTALLXP66C7CZ4E.jpg", details: "Qué decidirías cuando hacer feliz a la persona a la que amas significa también destrozarte el corazón? Una bella historia llena de momentos de profundo amor y momentos en los que te preguntas: ¿qué haría yo si estuviese en el lugar de Louisa Clark."},
        {id: 3, boton: "", name: "Bajo la misma estrella", price: 2000, stock:32,  picture:"https://resizer.glanacion.com/resizer/aTflbqSQr_qpbI0rCfBZqlnWGfI=/879x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/Q55WBPUFOZHW7IPGL4RMQXRCI4.jpg", details: "La historia comienza con una protagonista llamada Hazel con diagnóstico de cáncer, un día, en un grupo de terapia conoce a Gus, que también ha tenido la enfermedad. Una novela que te hará saltar lágrimas desde la primera página hasta el final del libro."},
]


const getProducts = () => {
    return (new Promise ((resolve, reject) => {
                setTimeout(() => {resolve(products)}, 2000)        
            }
        )   
    )    
}

const getItem = () => {
    return (new Promise ((resolve, reject) => {
                setTimeout(() => {resolve(products[0])}, 2000)        
            }
        )   
    )    
}
 

            


const ItemListContainer = ({greeting}) => {

    const [productList, setProductsList] = useState([])

    useEffect(() => {
        const list = getProducts()
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

