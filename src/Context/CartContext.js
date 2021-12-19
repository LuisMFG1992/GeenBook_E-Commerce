import react from "react";
// import { useState } from "react";

const ContextoTema = react.createContext()

const ProveedorTema = ({children}) => {
    
    return (
        <ContextoTema.Provider value={{nombre: "Luis"}} >
            {children}
        </ContextoTema.Provider>
    )
}

export { ContextoTema, ProveedorTema }