import styled from "styled-components";

export const ContainerContact = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form{
    display: flex;
    width: 50%;
    align-items: center;
    flex-direction: column;
    gap: 2vw;
    padding: 1vw;
    div{
      display: flex;
      justify-content: space-between;
      width: 100%;
      label{
        font-size: 1.8vw;
        width: 20%;
        color: white;
        font-family: 'Roboto', sans-serif;
      }
      input{
        font-size: 1.5vw;
        width: 70%;
        height: 6vh;
        border-radius: 9px;
        border: none;
      }
      textarea{
        width: 70%;
        height: 14vw;
        resize: none;
        border-radius: 9px;
        border: none;
        font-size: 1.2vw;
      }
    }
    button{
      width: 30%;
      height: 5vh;
      cursor: pointer;
      border-radius: 8px;
      border: none;
      color: white;
      font-size: 1.2vw;
      font-family: 'Roboto', sans-serif;
      background-color: #92A78C;
    }
  }
  @media (max-width: 1180px) {
    height: 90vh;
    form{
      width: 100%;
      gap: 4vw;
      margin-bottom: 18vw;
      div{
        label{
          font-size: 4vw;
          width: 20%;
          color: white;
          font-family: 'Roboto', sans-serif;
        }
        input{
          font-size: 1.5vw;
          width: 70%;
          height: 6vh;
          border-radius: 9px;
          border: none;
        }
        textarea{
          height: 20vh;
        }
     }
     button{
      width: 300px;
      height: 60px;
      font-size: 2rem;
      margin-top: 4vw;
     }
    }
  }
  @media (max-width: 576px) {
    width: 95vw;
    height: 90vh;
    form{
      div{
        input{
          width: 68%;
          height: 38px;
        }
        textarea{
          width: 68%;
        }
        label{
          font-size: 5.5vw;
        }
      }
      button{
        width: 150px;
        height: 40px;
      }
    }
  }
`