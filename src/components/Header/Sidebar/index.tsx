import NavigationMenu from "../NavigationMenu"
import { SidebarMenu } from "./style"

function Sidebar(){
  return(
    <SidebarMenu className="Sidebar">
      <NavigationMenu />
    </SidebarMenu>
  )
}
export default Sidebar