import axios from 'axios'
import { addPokemon } from './actions'

const addPokemonThunk = (newPokemon, setError, setLoading) => (dispatch, getState) => {
  setLoading(true)
  const {pokemons} = getState()
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`)
  .then(resp => {
    if(pokemons.find(pokemon => resp.data.id === pokemon.id)){
      console.log('find')
      setError(true)
    }else{
      console.log('dispatch')
      dispatch(addPokemon([...pokemons, resp.data]))
    }
  })
  .then(() => setLoading(false))
  .catch(error => {
    setError(true)
    setLoading(false)
  })
}

export default addPokemonThunk