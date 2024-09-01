import styled from "styled-components";
export const HeaderComponent = styled.header`
  position: relative;
  background-image: linear-gradient(95deg, #0037ff, #b853ff);
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .Hambuguer{
      display: none;
  }
  .Sidebar{
    display: none;
  }
  @media (max-width: 576px){
    justify-content: space-between;
    padding: 0 20px;
    height: 12vh;
    .Sidebar{
      display: block;
    }
    .Nav{
      display: none;
    }
    .Hambuguer{
      display: block;
    }
  }

`
