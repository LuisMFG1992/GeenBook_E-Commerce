import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"


const Details = () => {

    const { id } = useParams() 

    return (  
        <div className="App" style={{minHeight: "80vh"}}>
            <ItemDetailContainer id={id}/>
        </div>
    );
}
 
export default Details;