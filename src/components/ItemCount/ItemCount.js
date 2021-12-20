import "./ItemCount.css"
import { useState } from 'react';
import { ContextoTema } from "../../Context/CartContext";
import { useContext } from "react";

const ItemCount = (props) => {

  
  
  const {productosDeCarrito} = useContext(ContextoTema)
  console.log(productosDeCarrito)



  const {stock, inicial, onAdd } = props
    
  const [contador, setContador] = useState(inicial)

  const handleCardProducts = () => {
    onAdd(contador)
  }
  
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

  return (
      <div>
          <div className="contenedorControles">
              <button className="controles" onClick={incrementar}>+</button>
              <h3 className="contadorDeItems">{contador}</h3>
              <button className="controles" onClick={disminuir}>-</button>
          </div>
          <button className="AgregarAlCarrito" onClick={handleCardProducts}>Agregar al carrito</button>
      </div>
  )
}

export default ItemCount