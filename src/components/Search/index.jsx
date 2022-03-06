import { StyledError, StyledLoading, StyledSearch } from "./StyledSearch"
import { IoMdAddCircleOutline } from 'react-icons/io';
import {useState} from 'react'
import { useDispatch } from "react-redux";
import addPokemonThunk from "../../store/modules/pokemon/thunks";


const Search = () => {

  const dispatch = useDispatch()

  const [hover, setHover] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)


  const mouseHover = () => {setHover(true)}
  const mouseLeave = () => {setHover(false)}

  const handleSearch = () => {
    if(!input){
      setError(true)
    }else{
      setError(false)
      dispatch(addPokemonThunk(input, setError, setLoading))
      setInput('')
    }
  }

  return (
    <>
    {loading ? <StyledLoading>Capturando seu pokemon...</StyledLoading>
    :
    <StyledSearch>
      <input 
      placeholder="Nome ou Id pokemon"
      value={input}
      onChange={({target}) => setInput(target.value)}
      ></input>
      <IoMdAddCircleOutline 
      size={'42px'} 
      color={hover ? "#FFFFFF" : "#83BF90"} 
      onMouseOver={() => mouseHover()}
      onMouseLeave={() => mouseLeave()}
      onClick={() => handleSearch()}
      />
    </StyledSearch>
    }
    <StyledError>{error && 'Pokemon não encontrado ou já adicionado na lista...'}</StyledError>
  
    </>
  )
}

export default Search