import { NavContainer } from "./style"

function NavigationMenu(){
  return(
    <NavContainer className="Nav">
      <ul>
        <li>Inicio</li>
        <li>Projetos</li>
        <li>Sobre Mim</li>
        <li>Contato</li>
      </ul>
    </NavContainer>
  )
}
export default NavigationMenu