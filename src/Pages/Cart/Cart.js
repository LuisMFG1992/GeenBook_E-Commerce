import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextoTema } from "../../Context/CartContext";
import "./Cart.css"

const Cart = () => {

    const { carProducts } = useContext(ContextoTema);

    return (
        <>
        {carProducts.length === 0 ? 
            <>
                <h1>Cart is empty</h1> 
                <Link to="/">
                    Home
                </Link>
            </>
        
        : 
        
        <div className="App container-fluid" style={{minHeight: "80vh"}}>
            <div className="cartContainer">
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
                                    <>
                                        <tr key={element.id}>
                                            <td>
                                                <img src={element.picture} alt={element.name} style={{width: "2rem"}}/>
                                            </td>
                                            <td>{element.name}</td>
                                            <td>{element.price}</td>
                                            <td>{element.quantity}</td>
                                            <td>
                                                <button className="btn btn-primary">
                                                    Remove
                                                </button>
                                            </td>

                                        </tr>
                                    </>
                                )
                            })}

                    </tbody>
                </table>
            </div>
        </div>
        }
        
        </>
    );
}
 
export default Cart;