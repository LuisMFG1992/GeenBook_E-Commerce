import react from "react";
import { useState } from "react";
import { products } from "../components/ItemListContainer/ItemListContainer";

const ContextoTema = react.createContext()

const ProveedorTema = ({children}) => {

    const [carProducts, setCarProducts] = useState([])

    const [cartWidgetQuantity, setCartWidgetQuantity] = useState(0)

    // const [totalPriceCart, setTotalPriceCart] = useState(0)

    //TODO: COMO QUITAR EL ERROR
    //TODO: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

    let totalQuantity = 0

    carProducts.forEach( product => {
        totalQuantity += product.quantity
    });


    const getItem = (id) => {
        return (new Promise ((resolve, reject) => {
                    setTimeout(() => {resolve(products[id])}, 2000)        
                }
            )   
        )    
    }

    const addProductToCar = (id, name, price, contador) => {

        // Si no hay productos en el carrito entonces agregar 1

        if (carProducts.length === 0) {
            setCarProducts(
                [{id: id, name: name, price: price, quantity: contador}]
            )

            setCartWidgetQuantity(contador)

            // console.log(carProducts)

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
                        newCarProducts[index] = {id:id, name: name, quantity: quantity + contador}
                    }
                })

            } else {

                newCarProducts.push(    
                    {
                        id: id,
                        name: name,
                        quantity: contador
                    }
                )
            }

            setCarProducts(newCarProducts)

            
        }

        
    }

    console.log(carProducts)

    const sumAllPrices = carProducts.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
    console.log(sumAllPrices);

    // SUMANDO PRECIO PARA OBTENER EL TOTAL DEL CARRITO

    // let totalPriceCartCounter = 0

    // carProducts.forEach( product => {
    //     totalPriceCartCounter += product.price
    // });

    

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
            getItem,
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