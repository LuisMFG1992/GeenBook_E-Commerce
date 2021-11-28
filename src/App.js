import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// setContador( contador > 10 ? contador + 1 : alert("No hay stock disponible") )

// const useContador = () => {
//   const [contador, setContador] = useState(0)
  
//   const incrementar = () => {
//     setContador( contador + 1 )
//   }
  
//   const disminuir = () => {
//     setContador ( contador - 1)
//   }
  
//   return( contador, incrementar, disminuir )
  
// }

const App = () => {
  // const { contador, incrementar, disminuir } = useContador()
  
  const [contador, setContador] = useState(0)
  
  const incrementar = () => {
    setContador( contador + 1 )
  }
  
  const disminuir = () => {
    setContador ( contador - 1 )
  }
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Mi primer componente usando props"/>
      <button onClick={incrementar}>+</button>
      <button onClick={disminuir}>-</button>
      <h1>{contador}</h1>
    </div>
  );
}

export default App;