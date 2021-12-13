import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const Details = () => {

    const { id } = useParams() 

    return (  
        <div className="App">
            <NavBar />
            <ItemDetailContainer id={id}/>
            <Footer />
        </div>
    );
}
 
export default Details;