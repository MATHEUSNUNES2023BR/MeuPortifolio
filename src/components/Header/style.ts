import styled from "styled-components";
export const HeaderComponent = styled.header`
  position: relative;
  background-image: ${({theme})=> theme.backgroundHeader};
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .Hamburger{
      display: none;
  }

  @media (max-width: 576px){
    justify-content: space-between;
    padding: 0 20px;
    height: 12vh;
    .Sidebar{
      .Nav{
        display: flex;
        width: 220px;
      }
    }
    .Nav{
      display: none;
    }
    .Hamburger{
      display: block;
    }
  }

`
