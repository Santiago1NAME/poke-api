import { useEffect, useState } from "react";
import axios from "axios";
import CardPokemons from "./CardPokemons";

const MainPokemones = () =>{
    const [pokemones, setPokemones] = useState([]);

    const getPokemons = async () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`)
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
    return (
        <div>
            <h1 className="title-pokemons">Los 20 Mejores Pokemones</h1>
            <div className="cards-pokemons">
                {pokemones.map((pokemon, index) => {
                    return (
                    <CardPokemons key={ pokemon.id } pokemon={ pokemon }/>
                    )
                })}
            </div>
        </div>
    )
}

export default MainPokemones;