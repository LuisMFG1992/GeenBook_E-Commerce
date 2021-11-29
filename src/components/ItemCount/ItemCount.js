import "./ItemCount.css"
import { useState } from 'react';


const ItemCount = (props) => {
      
  const {stock, inicial, onAdd } = props
    
  const [contador, setContador] = useState(inicial)
  
  const incrementar = () => {
    if (contador < stock) {
      setContador( contador + 1 )
    } else {
      alert("No hay sufiente stock disponible.")
    }
  }
  
  const disminuir = () => {
    if (contador > inicial) {
    setContador ( contador - 1 )
    }
  }

  const agregar = () => {
    console.log(`${onAdd} ${contador}`)
  }

  return (
      <div>
          <div className="contenedorControles">
              <button className="controles" onClick={incrementar}>+</button>
              <h3 className="contadorDeItems">{contador}</h3>
              <button className="controles" onClick={disminuir}>-</button>
          </div>
          <button className="AgregarAlCarrito" onClick={agregar}>Agregar al carrito</button>
      </div>
  )
}

export default ItemCount

// TODO: Falta pasar los parametros a los botones y y ver como se añade el onAdd...







// const useContador = () => {
//   const [contador, setContador] = useState(0)
  
//   const incrementar = () => {
//         if (contador < 10) {
      //   setContador( contador + 1 )
      // } else {
      //   alert("No hay sufiente stock disponible.")
      // }
//   }
  
//   const disminuir = () => {
        // if (contador > 1) {
        //   setContador ( contador - 1 )
        //  }
//   }
  
//   return( contador, incrementar, disminuir )
  
// }

// const ItemCount = (props) => {
  // const { contador, incrementar, disminuir } = useContador()