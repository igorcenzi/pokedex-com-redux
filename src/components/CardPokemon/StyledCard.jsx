import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: #444444;
  border-top: 4px solid #CDBE7A;
  border-bottom: 4px solid #CDBE7A;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  position: relative;
  -webkit-box-shadow: 5px 5px 16px -2px #000000; 
  box-shadow: 5px 5px 16px -2px #000000;
  transition: all ease-in-out .3s;

   :hover{
    transform: scale(1.2)
  }

  span{
    background-color: #CDBE7A;
    color: #222222;
    padding: 4px 8px;
    font-size: 16px;
    border-radius: 4px 0 8px 0;
    position: absolute;
    top: -1px;
    left: 0;
    font-family: 'Caveat', cursive;
    font-weight: 700;
  }

  img{
    width: 150px;
    background-size: cover;
  }

  h2{
    font-family: 'Caveat', cursive;
    font-size: 36px;
    text-align: center;
    color: #FFFFFF;
    text-transform: capitalize;
  }

  p{
    font-size: 20px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: #CDBE7A;
    text-transform: capitalize;
  }
`