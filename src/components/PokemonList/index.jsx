import CardPokemon from "../CardPokemon";
import { StyledPokemonList } from "./StyledPokemonList";
import { useSelector } from "react-redux";

const PokemonList = () => {

  const pokemons = useSelector(state => state.pokemons)
  return (
    <StyledPokemonList>
      {pokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
    </StyledPokemonList>
  )
}

export default PokemonList