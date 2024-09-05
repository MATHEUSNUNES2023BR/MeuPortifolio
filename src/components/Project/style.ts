import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 8vw;
  margin: 2vw auto;
  @media (max-width: 1180px) {
    grid-template-columns: 1fr 1fr;
    margin: 5vw;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    margin: 5vw;
  }
`
export const Card = styled.div`
  display: flex;
  width: 95%;
  height: calc(38vw + 1rem);
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 0px 14px 4px #E0D5AD;
  background-color: #5B584F;
  @media (max-width: 1180px) {
    height: 60vw;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    width: 90%;
    height: 145vw;
    margin: 0 auto;
    border-radius: 8px;
  }
`

export const CardPhoto = styled.img`
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  @media (max-width: 576px) {
    border-radius: 8px;
  }
`

export const CardTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  margin-top: 1rem;
  @media (max-width: 576px) {
    font-size: 1.35rem;
  }
`

export const CardDescription = styled.p`
  width: 90%;
  height: 25rem;
  margin-top: 1rem;
  font-size: 1.15vw;
  text-align: justify;
  color: #fff;
  text-shadow: 0px 1px 1px #5B584F;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  @media (max-width: 1180px) {
    font-size: 1.6vw;
  }
  @media (max-width: 576px) {
    font-size: 4.15vw;
  }
`

export const CardIcons = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.1rem;
  a{
    width: 35%;
    text-decoration: none;
    .github, .site {
      height: calc(1.4vw + 1rem);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background-image: linear-gradient(30deg, #92A78C,#F7CD82);
      img{
        width: 25%;
        fill: aliceblue;
      }
      h3{
        font-size: 0.95vw;
        color: #5B584F;
        font-family: 'Roboto', sans-serif;
        font-weight: bolder;
        text-transform: uppercase;
      }
    }
    .github{
      img{
        width: 22.5%;
      }
    }
  }
  @media (max-width: 1180px) {
    a{
      .github, .site {
        img{

        }
        h3{
          font-size: 1.6vw;
        }
      }
    }
  }
  @media (max-width: 576px) {
    a{
      width: 40%;
      
      .github, .site {
        height: 5vh;
        img{

        }
        h3{
          font-size: 2.8vw;
        }
      }
    }
  }
  
`