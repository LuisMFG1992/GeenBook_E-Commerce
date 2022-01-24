import "./Cart.css"
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextoTema } from "../../Context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";


const Cart = () => {

    const objOrder = {
        // TODO: Debo linkear esta funcion con el boton de comprar del carrito
        // ? Es necesario hacer un formulario esto ?
        buyer: "Luis",
        // TODO: Traer el listado de productos
        items: "Libro",
        // TODO: Traer el total de items
        total: "4",
        phone: "123",
        address: "ABC",
        comment: "X"
    };
    
    addDoc(collection(db, "orders"), objOrder).then(({id}) =>{
        console.log(id)
    })
    

    const { carProducts, totalQuantity } = useContext(ContextoTema);
    
    const totalPrice = carProducts.reduce( (a,c) =>  a + c.price * c.quantity, 0) 


    return (

        <>
        {carProducts.length === 0 ? 
            <div className="App container-fluid" style={{minHeight: "80vh"}}>
                <h1 style={{color: "white"}}>Cart is empty</h1> 
                <Link to="/">
                    Home
                </Link>
            </div>
        
        : 
        
        <div className="App container-fluid" style={{minHeight: "80vh"}}>
            <div className="cartContainer" style={{ background: "rgb(160, 160, 160)"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                            {carProducts.map( element => {
                                return(
                                        <tr key={element.id}>
                                            <td>
                                                <img src={element.picture} alt={element.name} style={{width: "2rem"}}/>
                                            </td>
                                            <td>{element.name}</td>
                                            <td>{element.price}</td>
                                            <td>{element.quantity}</td>
                                            <td>
                                                <button className="btn btn-danger">
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                )
                            })}
                            <tr>
                                <td>{""}</td>
                                <td>Total Productos</td>
                                <td>{totalPrice}</td>
                                <td>{totalQuantity}</td>
                                <td>
                                    <button className="btn btn-success">Pay</button>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
        }
        
        </>
    );
}
 
export default Cart;