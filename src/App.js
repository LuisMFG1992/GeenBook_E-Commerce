import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  
  const [contador, setContador] = useState(0)
  
  const incrementar = () => {
    if (contador < 10) {
    setContador( contador + 1 )
    } else {
      alert("No hay mas stock disponible.")
    }
  }
  
  const disminuir = () => {
    if (contador > 0) {
    setContador ( contador - 1 )
    }
  }
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Stock = 10"/>
      <ItemCount />
    </div>
  );
}

export default App;