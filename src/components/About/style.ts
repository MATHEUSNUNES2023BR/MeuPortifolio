import { styled } from "styled-components";

export const ContainerAbout = styled.div`
  width: 70vw;
  height: 90vh;
  margin: 2vw auto;
  p{
    font-size: 1.8vw;
    color: ${({theme})=>theme.colorAbout};
    text-align: justify;
    font-family: 'Roboto', sans-serif;
    a{
      text-decoration: none;
      color: #F79E6B;
    }
  }
  h2{
    font-size: 2.2vw;
    color: ${({theme})=>theme.colorAbout};
    margin-top: 3.5vw;
    margin-bottom: 1vw;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
  }
  img{
    width: 25%;
    float: right;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 10px;
  }

  @media (max-width: 1180px) {
    width: 84vw;
    height: 95vh;
    margin-top: 10vh;
    h2{
      font-size: 4vw;
    }
    p{
      font-size: 2.8vw;
      margin-bottom: 15vw;

    }
    img{
      width: 30%;
    }
  }

  @media (max-width: 576px) {
    width: 90vw;
    margin-top: 6vh;
    h2{
      font-size: 6vw;
    }
    p{
      font-size: 3.7vw;
      margin-bottom: 15vw;

    }
    img{
      width: 45%;
      margin: 0 5px;
    }
  }
`