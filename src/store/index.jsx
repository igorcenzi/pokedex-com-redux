import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pokemonReducer from "./modules/pokemon/reducer";

const reducers = combineReducers({pokemons: pokemonReducer})

const store = createStore(reducers, applyMiddleware(thunk))

export default store