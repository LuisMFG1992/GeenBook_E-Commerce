import "./CategoryFilter.css"
import { CATEGORIES } from "./Const";

const CategoryFilter = ({setFilter}) => {

    const onChange = (e) => {
        const selectedValue = e.target.value
        setFilter(selectedValue)
    }

    return ( 
        <>
            <label style={{color: "white", fontSize: 30, marginRight:  10}}>Filtrar por: </label>
            <select onChange={onChange}>
                <option value={CATEGORIES.Todo}>Todo</option>
                <option value={CATEGORIES.Action}>Action</option>
                <option value={CATEGORIES.Love}>Love</option>
                <option value={CATEGORIES.Thriler}>Thriler</option>
            </select>
        </>
    );
}
 
export default CategoryFilter;