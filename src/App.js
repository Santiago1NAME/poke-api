import { Routes, Route, NavLink } from "react-router-dom";
import Pokeball from "./assets/img/pokeball.svg";
import Pokemons from "./components/pokemons/Pokemons";
import { useParams  } from 'react-router-dom';

const Prueba1 = () =>{
  let { userId } = useParams();
  return (
    <div>
      <p>HOLA  { userId }</p>
    </div>
  )
}

const Prueba2 = () =>{
  return (
    <div>
      <p>HOLA WARDEN</p>
    </div>
  )
}

const App = () => {

  const toggleMenu = () =>{
    const menu = document.querySelector('.nav-header');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
  return (
    <div className="page">
      <header className="header">
        <nav className="nav-header">
          <div className="buttons-left">
            <NavLink end className="nav-option-header" to="/pokemones">Boton 1</NavLink>
            <NavLink end className="nav-option-header" to="/botonl2">Boton 2</NavLink>
            <NavLink end className="nav-option-header" to="/botonl3">Boton 3</NavLink>
          </div>
          <div className="logo-header">
            <img className="logo-pokeball" src={ Pokeball } alt="Pokeball" />
          </div>
          <div className="buttons-rigth">
            <NavLink end className="nav-option-header" to="/botonr1">Boton 1</NavLink>
            <NavLink end className="nav-option-header" to="/botonr2">Boton 2</NavLink>
            <NavLink end className="nav-option-header" to="/botonr3">Boton 3</NavLink>
          </div>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <Routes>
            <Route exact path="/pokemones" element={<Pokemons />}>
              <Route path="type" />
              <Route path="type/:pokemonid" />
            </Route>
            <Route exact path="/botonl2" element={<Prueba1 />} />
            <Route exact path="/botonl3" element={<Prueba2 />} />
            <Route exact path="*" element={<Pokemons />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
