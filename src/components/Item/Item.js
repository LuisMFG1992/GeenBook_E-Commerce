import "./Item.css"
import { useEffect } from "react"

function getItems() {
    return (new Promise ((resolve, reject) => {
                const productos = [
                        {id: 1, nombre: "Geen Book", precio: 1000, stock:10},
                        {id: 2, nombre: "Biblia", precio: 2000, stock:20},
                        {id: 3, nombre: "Divina comedia", precio: 3000, stock:30},
                ]
                
                setTimeout(() => {resolve(productos)}, 2000)
                
            }
        )   
    )    
}
        
export default getItems