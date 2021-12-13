import "./CategoryFilter.css"
import { CATEGORIES } from "./Const";

const CategoryFilter = ({ category }) => {

    const onChange = (e) => {
        const selectedValue = e.target.value
        window.location.href = `/category/${selectedValue}` 
    }

    return ( 
        <>
            <label style={{color: "white", fontSize: 30, marginRight:  10}}>Filtrar por: </label>
            <select defaultValue={category} onChange={onChange}>
                <option value={CATEGORIES.Todo}>Todo</option>
                <option value={CATEGORIES.Action}>Action</option>
                <option value={CATEGORIES.Love}>Love</option>
                <option value={CATEGORIES.Thriler}>Thriler</option>
            </select>
        </>
    );
}
 
export default CategoryFilter;