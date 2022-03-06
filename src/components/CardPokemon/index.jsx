import { StyledCard } from "./StyledCard"


const CardPokemon = ({pokemon}) => {
  return (
  <StyledCard>
    <span>#{pokemon.id}</span>
    <img src={pokemon.sprites.front_default} alt={'Pokemon'}></img>
    <h2>{pokemon.name}</h2>
    <p>{pokemon.types.map(type => type.type.name).join(', ')}</p>
  </StyledCard>
  )
}

export default CardPokemon