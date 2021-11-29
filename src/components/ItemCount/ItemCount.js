import "./ItemCount.css"
import { useState } from 'react';

// const useContador = () => {
//   const [contador, setContador] = useState(0)
  
//   const incrementar = () => {
//     setContador( contador + 1 )
//   }
  
//   const disminuir = () => {
//     setContador ( contador - 1)
//   }
  
//   return( contador, incrementar, disminuir )
  
// }

const ItemCount = () => {
      // const { contador, incrementar, disminuir } = useContador()

    const [contador, setContador] = useState(0)
  
    const incrementar = () => {
      if (contador < 10) {
      setContador( contador + 1 )
      } else {
        alert("No hay sufiente stock disponible.")
      }
    }
    
    const disminuir = () => {
      if (contador > 0) {
      setContador ( contador - 1 )
      }
    }

    return (
        <div>
            <div className="contenedorControles">
                <button className="controles" onClick={incrementar}>+</button>
                <h3 className="contadorDeItems">{contador}</h3>
                <button className="controles" onClick={disminuir}>-</button>
            </div>
            <button className="AgregarAlCarrito">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount





