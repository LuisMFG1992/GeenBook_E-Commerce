import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Contacto from './Pages/Contacto/Contacto';
import Libros from './Pages/Libros/Libros';
import Novedades from './Pages/Novedades/Novedades';

const App = () => {  

  return (
    <Router>
      <Switch>
        
        <Route path="/" exact>
          <Home />
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
    </Router>
  );
}

export default App;
