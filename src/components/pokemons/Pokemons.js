import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePokemones from "./HomePokemones";
import TypesPokemons from "./TypesPokemons";
import TypePokemons from "./TypePokemons";
import Pokeball from "../../assets/img/pokeball.svg";

const Pokemons = () =>{
    const [capturado, setCapturado] = useState(false);
    const [pokemonCapturado, setPokemonCapturado] = useState('');

    useEffect(() => {
      setTimeout(() => {
        setCapturado(false);
      }, 6000);
    }, [capturado]);

    return (
      <div className="section-main">
        <section className="sidebar">
          <div className="options-sidebar">
            <ul>
              <TypesPokemons />
            </ul>
          </div>
        </section>
        <section className="section-sub-main">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePokemones setCapturado={ setCapturado } setPokemonCapturado={ setPokemonCapturado }/>}/>
              <Route path="type" element={ <TypesPokemons /> } />
              <Route path="/type/:pokemonid"  element={ <TypePokemons  setCapturado={ setCapturado } setPokemonCapturado={ setPokemonCapturado }/> } />
            </Routes>
          </div>
        </section>
        {
          capturado === true &&
            <div className="capturado-pokemon">
              <h1 className="title-pokemons">Has capturado un { pokemonCapturado }</h1>
              <div className="animation-pokeball">
                <img className="capt-pokemon" src={ Pokeball } alt="capturar" />
              </div>
            </div>
        }
      </div>
    )
}

export default Pokemons;