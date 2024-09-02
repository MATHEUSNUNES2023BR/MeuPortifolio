import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 55%;
  ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    li{
      font-size: calc(0.45vw + 1.30rem);
      font-family: "Roboto", sans-serif;
      color: white;
      cursor: pointer;
    }
  } 
  @media (max-width: 1180px){
    width: 70%;
  }
  @media (max-width: 576px){
    display: flex;
    width: 100%;
    height: 40vh;
    margin: 8vw 0 0 5vw;
    ul{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      list-style: none;
      li{
        font-size: calc(0.45vw + 1.30rem);
        font-family: "Roboto", sans-serif;
        color: ${({theme}) => theme.colorSidebar} ;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
 
`
