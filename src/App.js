import './App.css';
import { useEffect, useState } from 'react';
// import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function getItems() {
    return (new Promise ((resolve, reject) => {
                const productos = [
                        {id: 1, nombre: "Geen Book", precio: 1000, stock:10},
                        {id: 2, nombre: "Biblia", precio: 2000, stock:20},
                        {id: 3, nombre: "Divina comedia", precio: 3000, stock:30},
                ]
                
                setTimeout(() => {resolve(productos)}, 2000)
                
            }
        )   
    )    
}

const ItemList2 = ({items}) => {
    return (
        <div>
          <ul>
            { items.map( i => <li key={i.id}>{i.nombre}</li> ) }
          </ul>
        </div>
    )
}


const App = () => {  

  const [listProduct, setListProduct] = useState([])

  useEffect(() => {
    const list = getItems()
    
    list.then(response => {

      setListProduct(response)

    })
  }, [])
  

  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting="Stock = 10"/> */}
      <ItemList2 items={listProduct} />
    </div>
  );
}

export default App;