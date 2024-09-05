import { Link } from "react-router-dom"
import { NavContainer } from "./style"
import { useDispatch } from "react-redux"
import { toggleHambuguer } from "../../../features/Sidebar/sliceSidebar"
import { useEffect, useState } from "react"
function NavigationMenu(){
  const dispatch = useDispatch()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpar o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return(
    <NavContainer className="Nav">
      <ul>
        {windowWidth >= 577 ? (
          <>  
            <li>
              <Link to={"/"}> Inicio </Link>
            </li>
            <li>
              <Link to={"/Projetos"}> Projetos </Link>
            </li>
            <li>
              <Link to={"/Sobre"}> Sobre Mim </Link>
            </li>
            <li>
              <Link to={"/Contato"}> Contato </Link>
            </li>
          </>
        ):(
          <>          
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
          </>
        )}
        
      </ul>
    </NavContainer>
  )
}
export default NavigationMenu