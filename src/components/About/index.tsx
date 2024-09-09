import { ContainerAbout } from "./style"
import MinhaFoto2 from '../../assets/images/MinhaFoto2.jpg'
function Sobre(){
  return(
    <ContainerAbout> 
      <img src={MinhaFoto2} alt="" />
      <h2>Sobre</h2>
      <p>
        Nascido em Florianópolis, Santa Catarina, cresci em Aparecida de Goiânia, Goiás. Atualmente, tenho 24 anos e estou cursando Engenharia de Software na Estácio, além de fazer um curso de Desenvolvedor Fullstack Python pela EBAC. Sou cristão e creio no Senhor Yeshua Hamashiach, valorizo a honestidade nas relações e busco ser transparente em tudo o que faço.
        Embora ainda esteja em processo de me tornar um desenvolvedor fullstack completo, já possuo uma base sólida em diversas tecnologias, como React, TypeScript, JavaScript, Redux, HTML, CSS, Bootstrap e SQL. Estou sempre em busca de novos desafios para expandir minhas habilidades e contribuir com soluções inovadoras no campo da tecnologia.
      </p>
      <h2>Experiência Profissional</h2>
      <p>
        Tive a oportunidade de prestar serviços de TI para o <a target="_blank" href="https://www.google.com/maps/place/Aparecida+Shopping/@-16.8232248,-49.2514464,15z/data=!4m2!3m1!1s0x0:0x2f9e5c33e5840104?sa=X&ved=1t:2428&ictx=111">Aparecida Shopping</a>, através da empresa <a target="_blank" href="https://uniaotecnologia.com.br/">União Tecnologia</a>. Durante esse período, contribuí para o suporte e manutenção das infraestruturas tecnológicas do shopping, garantindo o bom funcionamento dos sistemas e a resolução de problemas técnicos. Foi uma experiência enriquecedora, onde pude aplicar meus conhecimentos na área de tecnologia e desenvolver habilidades voltadas para o suporte técnico em um ambiente dinâmico e de grande movimento, sempre buscando eficiência e qualidade nos serviços prestados.
      </p>
    </ContainerAbout>
  )
} 

export default Sobre