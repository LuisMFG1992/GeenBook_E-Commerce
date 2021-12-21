import react from "react";
import { useState } from "react";
import { products } from "../components/ItemListContainer/ItemListContainer";
// import { useEffect } from "react";

const ContextoTema = react.createContext()

const ProveedorTema = ({children}) => {

    const [carProducts, setCarProducts] = useState([])


    const getItem = (id) => {
        return (new Promise ((resolve, reject) => {
                    setTimeout(() => {resolve(products[id])}, 2000)        
                }
            )   
        )    
    }

    const addItem = (product) => {
        setCarProducts([...carProducts, product])
    }

    const removeItem = (itemId) => {

    }

    const clear = () => {

    }

    const isInCart = (id) => {
        
        const verification = carProducts.find(element => element.id === id)

        if (verification) {
            return true
        } else {
            return false
        }
    }

    const addQuantity = (id) => {
        const position = carProducts.findIndex(element => element.id === id)        
        // const found = carProducts.find(element => element.id === id)
        setCarProducts([...carProducts, carProducts[position].quantity])
        
        
        // OK

    }



    

    return (
        <ContextoTema.Provider value={{ 
            setCarProducts,
            getItem,
            addItem,
            removeItem,
            clear,
            isInCart,
            addQuantity,
            carProducts
            }} >
            {children}
        </ContextoTema.Provider>
    )
}

export { ContextoTema, ProveedorTema }