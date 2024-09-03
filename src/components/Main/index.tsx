import { ContainerIcons, ContainerInformation, ContainerPhoto, ContainerSidebarIcons, MainContainer } from "./style"
import MyPhoto from '../../assets/images/minha-foto.jpg'
import react from '../../assets/images/react-logo-svgrepo-com.svg'
import typescript from '../../assets/images/typescript-logo-svgrepo-com.svg'
import redux from '../../assets/images/redux-logo-svgrepo-com.svg'
import javascript from '../../assets/images/javascript-logo-svgrepo-com.svg'
import bootstrap from '../../assets/images/bootstrap-4-logo-svgrepo-com.svg'
import postgres from '../../assets/images/postgresql-logo-svgrepo-com.svg'
import whatsapp from '../../assets/images/whatsapp-color-svgrepo-com.svg'
import linkedin from '../../assets/images/linkedin-svgrepo-com.svg'
import github from '../../assets/images/github-142-svgrepo-com.svg'
import { useEffect, useState } from "react"
import BusinessCard from "./BusinessCard"
function Main(){
  const [text, setText] = useState('');
  const textMain = 'Olá, sou Matheus Nunes de Barros,\ndesenvolvedor web\nespecializado em React e TypeScript.\nTransformo ideias em realidade digital.';
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < textMain.length) {
        setText(e => e + textMain[index]);
        setIndex(i => i + 1);
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [index, textMain]);
  return(
    <MainContainer>
      <ContainerPhoto>
        <ContainerSidebarIcons> 
          <a target="_blank" href="https://contate.me/mathes-ti"><img src={whatsapp} alt="" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/matheusnunesdebarros/"><img src={linkedin} alt="" /></a>
          <a target="_blank" href="https://github.com/MATHEUSNUNES2023BR"><img src={github} alt="" /> </a>
        </ContainerSidebarIcons>
        <img src={MyPhoto} alt="Minha Foto" />
      </ContainerPhoto>

      <ContainerInformation>
        <pre>{text}</pre>
        <ContainerIcons>
          <img src={react} alt="" />
          <img src={typescript} alt="" />
          <img src={javascript} alt="" />
          <img src={redux} alt="" />
          <img src={bootstrap} alt="" />
          <img src={postgres} alt="" />
        </ContainerIcons>
      </ContainerInformation>
      <BusinessCard />
    </MainContainer>
  )
}
export default Main