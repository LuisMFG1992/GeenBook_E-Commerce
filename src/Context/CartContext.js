import react from "react";
import { useState } from "react";

const ContextoTema = react.createContext()

const ProveedorTema = ({children}) => {

    const [productosDeCarrito, setcontador] = useState("Aun no has agregado productos al carrito")
    
    return (
        <ContextoTema.Provider value={{productosDeCarrito}} >
            {children}
        </ContextoTema.Provider>
    )
}

export { ContextoTema, ProveedorTema }