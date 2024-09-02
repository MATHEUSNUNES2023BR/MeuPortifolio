import MenuHambuguer from "./HamburgerMenu"
import NavigationMenu from "./NavigationMenu"
import Sidebar from "./Sidebar"
import { HeaderComponent } from "./style"
import SwitchButton from "./SwitchButton"

function Header () {
  return (
    <HeaderComponent>
      <NavigationMenu />
      <MenuHambuguer />
      <SwitchButton />
      <Sidebar />
    </HeaderComponent>
  )
}

export default Header