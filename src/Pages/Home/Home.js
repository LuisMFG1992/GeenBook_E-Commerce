import NavBar from "../../components/NavBar/NavBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { CATEGORIES } from "../../components/CategoryFilter/Const";

const Home = () => {

    const { category } = useParams()

    return ( 
        <div className="App">
            <NavBar />
            <CategoryFilter category={category || CATEGORIES.Todo}/>
            <ItemListContainer />
            <Footer />
        </div>
     );
}
 
export default Home;