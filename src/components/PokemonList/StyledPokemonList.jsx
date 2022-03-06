import styled from "styled-components";

export const StyledPokemonList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 600px){
    justify-content: flex-start;
  }
`