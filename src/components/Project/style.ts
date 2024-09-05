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
    height: 38vh;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    width: 90%;
    height: 80vh;
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

export const CardButton = styled.button`
  width: 60%;
  height: 3.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: none;
  background-image: linear-gradient(220deg, #F79E6B, #F7CD82);
  color: #5B584F;
  font-size: calc(0.6vw + 0.5rem);
  font-weight: 600;
  cursor: pointer;
`