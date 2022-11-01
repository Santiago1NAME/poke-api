import { BrowserRouter as Router, Routes, Route, NavLink, Link, useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MainPokemones from "./MainPokemones";
import TypesPokemons from "./TypesPokemons";
import TypePokemons from "./TypePokemons";
import Pokeball from "../../assets/img/pokeball.svg";

const Pokemons = () =>{
    const [pokemones, setPokemones] = useState([]);
    const [capturado, setCapturado] = useState(false);
    const [pokemonCapturado, setPokemonCapturado] = useState('');
    //tipos: type/4
    const getPokemons = async () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
      .then(res => {
        const data = res.data.results;
        data.forEach(element => {
          axios.get(element.url)
          .then(pokemon => {
            setPokemones(prevArray => [...prevArray, pokemon.data]);
          })
        });
      });
    }

    useEffect(() => {
      getPokemons();
    }, []);

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
              <Route path="/" element={<MainPokemones pokemones={ pokemones }/>}/>
              <Route path="type" element={ <TypesPokemons /> } />
              <Route path="/type/:pokemonid"  element={ <TypePokemons  setCapturado={ setCapturado } setPokemonCapturado={ setPokemonCapturado }/> } />
            </Routes>
          </div>
        </section>
        {
          capturado == true &&
            <div className="capturado-pokemon">
              <h1>Has capturado un { pokemonCapturado }</h1>
              <div className="animation-pokeball">
                <img className="capt-pokemon" src={ Pokeball } alt="capturar" />
              </div>
            </div>
        }
      </div>
    )
}

export default Pokemons;