import { useState, useEffect } from "react";
import Pokeball from "../../assets/img/pokeball.svg";

const CardPokemons = ({ pokemon, setCapturado, setPokemonCapturado }) =>{

    const capturarPoke = (name) =>{
        console.log(name);
        setCapturado(true);
        setPokemonCapturado(name);
    }

    return (
        <div className="card-pokemon">
            <div className="card-front">
                <img className="img-card" src={ pokemon.sprites.front_default } alt={pokemon.name} />
            </div>
            <div className="card-back">
                <p className="name-pokemon">{pokemon.name}</p>
                <img className="cap-pokemon" src={ Pokeball } alt="capturar" onClick={ () => capturarPoke(pokemon.name) }/>
            </div>
        </div>
    )
}

export default CardPokemons;