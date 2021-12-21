import "./ItemCount.css"
import { useState } from 'react';
import { ContextoTema } from "../../Context/CartContext";
import { useContext } from "react";

const ItemCount = (props) => {

  const {stock, inicial, onAdd, products } = props

  const {carProducts, addItem, isInCart, addQuantity} = useContext(ContextoTema)
  
  const [contador, setContador] = useState(inicial)

  const handleCardProducts = () => {

    onAdd(contador)

    const {id, name, price} = products
    
    const carProduct = {
      id,
      name,
      price,
      quantity: 1
    }

    const verification = isInCart(id)

    if (verification) {

      // addQuantity(id)

    } else {

      addItem(carProduct)
      console.log("El producto se añadio al carrito")
      
    }
  }



  console.log(carProducts)

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