import CardPokemons from "./CardPokemons";

const MainPokemones = ({ pokemones }) =>{
    return (
        <div className="cards-pokemons">
            {pokemones.map((pokemon, index) => {
                return (
                <CardPokemons key={ pokemon.id } pokemon={ pokemon }/>
                )
            })}
        </div>
    )
}

export default MainPokemones;