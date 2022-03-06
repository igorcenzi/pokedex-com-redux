import { ADD_POKEMON } from "./actionTypes";

const inicialState = []

const pokemonReducer = (state = inicialState, action) => {
  switch (action.type){
    case ADD_POKEMON:
      return action.pokemon
    default:
      return state
  }
}

export default pokemonReducer