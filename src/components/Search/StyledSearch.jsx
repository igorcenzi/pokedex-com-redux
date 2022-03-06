import styled from "styled-components";

export const StyledSearch = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: rgba(245, 200, 150, .5);
  width: fit-content;
  border: 2px solid transparent;
  align-items: center;

  :focus-within{
    border-color: ${props => props.error ? "#FF2222" : "#CDBE7A"};
  }

  input{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    border: none;
    border-radius: 20px;
    padding: 12px 24px;
    background-color: transparent;
    color: #444444;

    ::placeholder{
      color: #666666;
    }

    :focus{
      outline: none;
    }
  }
`

export const StyledError = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #FF2222;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 40px;
`

export const StyledLoading = styled.h1`
  font-family: 'Caveat', cursive;
  text-align: center;
  background: #EDE618;
background: -webkit-linear-gradient(to bottom, #EDE618 10%, #FFFFFF 100%);
background: -moz-linear-gradient(to bottom, #EDE618 10%, #FFFFFF 100%);
background: linear-gradient(to bottom, #EDE618 10%, #FFFFFF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`