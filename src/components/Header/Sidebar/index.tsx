import { useSelector } from "react-redux"
import NavigationMenu from "../NavigationMenu"
import { SidebarMenu } from "./style"
import { RootState } from "../../../store"

function Sidebar(){
  const stateHamburger = useSelector((state: RootState) => state.sliceSidebar.hamburgerState)
  return(
    <SidebarMenu state={stateHamburger} className="Sidebar">
      <NavigationMenu />
    </SidebarMenu>
  )
}
export default Sidebar