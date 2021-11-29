import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Stock = 10"/>
    </div>
  );
}

export default App;