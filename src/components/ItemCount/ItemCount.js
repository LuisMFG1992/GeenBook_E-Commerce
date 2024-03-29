import React from "react";
import "./ItemCount.css"
import { useState } from 'react';
import { ContextoTema } from "../../Context/CartContext";
import { useContext } from "react";

const ItemCount = (props) => {

  
  const {stock, inicial, products, onAdd } = props

  const {id, name, price, picture } = products

  const {addProductToCar} = useContext(ContextoTema)
  
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

  return (
      <div>
          <div className="contenedorControles">
              <button className="controles" onClick={incrementar}>+</button>
              <h3 className="contadorDeItems">{contador}</h3>
              <button className="controles" onClick={disminuir}>-</button>
          </div>
          <button className="AgregarAlCarrito" onClick={() => {
              addProductToCar(id, name, price, contador, picture) 
              onAdd(contador)
            }}>Agregar al carrito
          </button>
          <p>Disponible: {stock}</p>
      </div>
  )
}

export default ItemCount