import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPokemons from "./CardPokemons";
import Pagination from "../Pagination";

const TypePokemons = ({ setCapturado, setPokemonCapturado}) => {

    const [paginaI, setPaginaI] = useState(1);
    const [input, setInput] = useState(1);
    const [cantxP, setCantxP] = useState(20);
    const [types, setTypes] = useState([]);
    const [count, setCount] = useState();
    const params = useParams();

    const getTypePokemons = () =>{
        var countP = 0;
        axios.get(`https://pokeapi.co/api/v2/type/${ params.pokemonid }/?limit=10`)
        .then(res => {
            const data = res.data.pokemon;
            data.forEach(type => {
                countP += 1;
                setCount(countP);
                axios.get(type.pokemon.url)
                .then(pokemon => {
                    setTypes(prevArray => [...prevArray, pokemon.data]);
                })
            });
        })
    }

    const nexPage = () =>{
        setInput(input + 1)
        setPaginaI(paginaI + 1)
    }

    const backPage = () =>{
        setInput(input - 1)
        setPaginaI(paginaI - 1)
    }

    useEffect(() => {
        getTypePokemons();
        setTypes([]);
        setPaginaI(1);
    }, [params.pokemonid]);

    return (
        <div>
            <Pagination backPage={ backPage } nexPage={ nexPage } paginaI={ paginaI } count={ count } cantxP={ cantxP }/>
            <div className="cards-pokemons">
                {
                    types.slice((paginaI - 1) * cantxP, (paginaI - 1) * cantxP + cantxP).map((type, index) => {
                        return (
                            <CardPokemons key={ index } pokemon={ type } setCapturado={ setCapturado } setPokemonCapturado={ setPokemonCapturado }/>
                        )
                    })
                }
            </div>
            <Pagination backPage={ backPage } nexPage={ nexPage } paginaI={ paginaI } count={ count } cantxP={ cantxP }/>
        </div>
    )
}

export default TypePokemons;