import NavBar from "../../components/NavBar/NavBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const Home = () => {

    const [filter, setFilter] = useState("Todo")

    return ( 
        <div className="App">
            <NavBar />
            <CategoryFilter setFilter={setFilter}/>
            <ItemListContainer filter={filter} />
            <Footer />
        </div>
     );
}
 
export default Home;