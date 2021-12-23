import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { CATEGORIES } from "../../components/CategoryFilter/Const";

const Home = () => {

    const { category } = useParams()

    return ( 
        <div className="App" style={{minHeight: "80vh"}}>
            <CategoryFilter category={category || CATEGORIES.Todo}/>
            <ItemListContainer />
        </div>
     );
}
 
export default Home;