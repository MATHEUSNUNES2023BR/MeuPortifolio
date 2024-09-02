import { Link } from "react-router-dom"
import { NavContainer } from "./style"
import { useDispatch } from "react-redux"
import { toggleHambuguer } from "../../../features/Sidebar/sliceSidebar"
function NavigationMenu(){
  const dispatch = useDispatch()
  return(
    <NavContainer className="Nav">
      <ul>
        <li onClick={() => dispatch(toggleHambuguer())}>
          <Link to={"/"}> Inicio </Link>
        </li>
        <li onClick={() => dispatch(toggleHambuguer())}>
          <Link to={"/Projetos"}> Projetos </Link>
        </li>
        <li onClick={() => dispatch(toggleHambuguer())}>
          <Link to={"/Sobre"}> Sobre Mim </Link>
        </li>
        <li onClick={() => dispatch(toggleHambuguer())}>
          <Link to={"/Contato"}> Contato </Link>
        </li>
      </ul>
    </NavContainer>
  )
}
export default NavigationMenu