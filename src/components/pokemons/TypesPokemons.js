import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const TypesPokemons = () =>{

    const [types, setTypes] = useState([]);
    const getTypesPokemons = async () => {
      axios.get(`https://pokeapi.co/api/v2/type`)
      .then(res => {
        const data = res.data.results;
        data.forEach(element => {
            axios.get(element.url)
            .then(type => {
                setTypes(prevArray => [...prevArray, type.data]);
            })
        });
      });
    }

    useEffect(() => {
        getTypesPokemons();
    }, []);

    return (
        <div className="">
            <li>
                <NavLink end className="nav-option-sidebar" to="/pokemones">Inicio</NavLink>
            </li>
            {
                types.map((type, index) =>{
                    return(
                        <li key={index}>
                            <NavLink end className="nav-option-sidebar" to={`/pokemones/type/` + type.id }>{ type.name }</NavLink>
                        </li>
                    );
                })
            }
        </div>
    )
}

export default TypesPokemons;