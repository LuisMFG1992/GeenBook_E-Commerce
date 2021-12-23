import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Contacto from './Pages/Contacto/Contacto';
import Libros from './Pages/Libros/Libros';
import Novedades from './Pages/Novedades/Novedades';
import Cart from "./Pages/Cart/Cart"
import { ProveedorTema } from './Context/CartContext';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {  

  return (
    <ProveedorTema>
      <Router>

        <NavBar />
        
        <Switch>
          
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/category/:category">
            <Home />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/details/:id">
            <Details />
          </Route>

          <Route path="/libros">
            <Libros />
          </Route>

          <Route path="/novedades">
            <Novedades />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>
          
        </Switch>
        <Footer />
      </Router>
    </ProveedorTema>
  );
}

export default App;
