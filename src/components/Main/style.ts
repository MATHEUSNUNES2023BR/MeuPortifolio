import styled from "styled-components";

export const MainContainer = styled.main`
  display: grid;
  width: 100vw;
  grid-template-columns: 0.6fr 1fr;
  height: 90vh;
  @media (max-width: 1180px){
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr;
  }
`

export const ContainerPhoto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  img{
    margin-top: calc(6vh + 1vw);
    width: 62%;
    border-radius: 50%;
    box-shadow: 10px 10px 10px 5px ${({theme}) => theme.photoShadow};
  }
  @media (max-width: 1180px){
    justify-content: center;
    align-items: center;
    height: 40vh;
    img{
    width: 50%;
    border-radius: 50%;
  }
  }
  @media (max-width: 576px){
    img{
      width: 60%;
      border-radius: 50%;
    }
  }
  position: relative;
`

export const ContainerSidebarIcons = styled.aside`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 20px;
  width: calc(7% + 1.25rem);
  height: 60%;
  background-image: ${({ theme })=> theme.sidebarIconsBackground} ;
  border-radius: 10px;
  a{
    cursor: pointer;
    width: 56%;
    height: 10%;
    img{
      width: 100%;
      margin: 0;
      border-radius: 0;
      box-shadow: none;
      &:hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: 0.5s;
      }
    }
  }
  @media (max-width: 1180px){
    position: absolute;
    width: calc(7% + 1rem);
    margin: 0;
    left: 10px;
    top: 10px;
    height: 100%;
  }
`

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  pre{
    align-self: end;
    width: 90%;
    height: 22vh;
    margin-top: 17vh;
    color: ${({theme})=> theme.color};
    text-transform: uppercase;
    text-shadow: 2px 2px 8px ${({theme})=> theme.textShadow};
    font-style: italic;
    font-size: 2.15vw;
    font-family: "Roboto";
    font-weight: 500;
  }
  @media (max-width: 1180px){
    margin-top: 8vh;
    pre{
      align-self: center;
      font-size: 4.35vw;
      margin:0;
      text-align: center;
    }
  }
  @media (max-width: 576px){
    pre{
      font-size: 4.55vw;
      width: 100%;
    }
  }
`

export const ContainerIcons = styled.div`
  display: grid;
  width: 60%;
  align-self: center;
  margin-top: 5vh;
  grid-template-columns: repeat(6, 1fr);
  img{
    width: 40%;
    animation: rotation 6s infinite linear;
  }
  
  @keyframes rotation {
    from{
      transform: rotateY(0deg);
    }
    to{
      transform: rotateY(360deg);
    }
  }

  @media (max-width: 1180px){
    margin: 0;
    width: 70%;
    img{
      width: 60%;
      animation: rotation 6s infinite linear;
    }
  }

  @media (max-width: 576px){
    width: 75%;
    img{
      width: 65%;
      animation: rotation 6s infinite linear;
    }
  }
`
