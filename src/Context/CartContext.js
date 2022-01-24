import React from "react";
import react from "react";
import { useState } from "react";

const ContextoTema = react.createContext()


const ProveedorTema = ({children}) => {
    
    const [carProducts, setCarProducts] = useState([])
    
    const [cartWidgetQuantity, setCartWidgetQuantity] = useState(0)
    
    let totalQuantity = 0
    
    carProducts.forEach( product => {
        totalQuantity += product.quantity
    });
    




    const addProductToCar = (id, name, price, contador, picture) => {

        // Si no hay productos en el carrito entonces agregar 1

        if (carProducts.length === 0) {
            setCarProducts(
                [{id: id, name: name, price: price, quantity: contador, picture: picture}]
            )

            setCartWidgetQuantity(contador)


        } else {
            // Si el producto que intentamos agregar ya existe entonces actualizar quantity
            const newCarProducts = [...carProducts]

            const productAlreadyExist = newCarProducts.filter((product) => {
                return product.id === id
            }).length > 0

            // Si ya tiene el producto entonces actualizarlo
            if (productAlreadyExist) {
                
                newCarProducts.forEach((product, index) => {
                    if (product.id === id) {
                        const quantity = newCarProducts[index].quantity
                        newCarProducts[index] = {id:id, name: name, price: price, picture: picture, quantity: quantity + contador}
                    }
                })

            } else {

                newCarProducts.push(    
                    {
                        id: id,
                        name: name,
                        price: price,
                        picture: picture,
                        quantity: contador
                    }
                )
            }

            setCarProducts(newCarProducts)

            
        }

        
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
        setCarProducts([...carProducts, carProducts[position].quantity])
    }



    

    return (
        <ContextoTema.Provider value={{ 
            setCarProducts,
            addItem,
            removeItem,
            clear,
            isInCart,
            addQuantity,
            addProductToCar,
            carProducts,
            cartWidgetQuantity,
            setCartWidgetQuantity,
            // totalPriceCartCounter
            totalQuantity
            }} >
            {children}
        </ContextoTema.Provider>
    )
}

export { ContextoTema, ProveedorTema }