import { styled } from "styled-components";
interface Props{
  overlay: boolean
}
export const OverlayCard = styled.div<Props>`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  display: ${({ overlay }:Props)=> overlay == false ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  z-index: 2;
`
export const ContainerCard = styled.div`
  width: calc(45vw + 200px);
  img{
    width: 100%;
  }
  @media(max-width: 1180px){
    width: 90vw;
  }
  @media(max-width: 576px){
    margin-bottom: 15vh;
  }
`

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  width: calc(1vw + 1.5rem);
  top: 4rem;
  right: 18vw;
  cursor: pointer;
  img{
    width: 100%;
  }
  @media(max-width: 1180px){
    width: 7vw;
    top: 22vw;
    right: 5vw;
  }
  @media(max-width: 576px){
    width: 7vw;
    top: 15vh;
    right: 5vw;
  }
`

export const BusinessCardButton = styled.button`
  position: absolute;
  z-index: 1;
  right: 8vw;
  bottom: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 3rem;
  text-align: center;
  font-size: 1.35vw;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: ${({theme})=> theme.color};;
  background-image: ${({theme})=> theme.businesCardBackground};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  @media(max-width: 1180px){
    width: 40vw;
    height: 7vw;
    font-size: 3.5vw;
    bottom: 4vw;
    right: 2vw;
  }
  @media(max-width: 576px){
    bottom: 1vh;
    right: 5vw;
    width: 48vw;
    height: 10vw;
    font-size: 4.5vw;
  }
`