import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const text = ["Boton 1", "Boton 2", "Boton 3"]

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Mi primer componente usando props"/>
    </div>
  );
}

export default App;