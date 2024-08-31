import MenuHambuguer from "./HambuguerMenu"
import NavigationMenu from "./NavigationMenu"
import { HeaderComponent } from "./style"
import SwitchButton from "./SwitchButton"

function Header () {
  return (
    <HeaderComponent>
      <NavigationMenu />
      <MenuHambuguer />
      <SwitchButton />
    </HeaderComponent>
  )
}

export default Header