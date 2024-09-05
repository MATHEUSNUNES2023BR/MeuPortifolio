import { CardContainer, Card, CardDescription, CardButton, CardPhoto, CardTitle } from "./style"
import { dataProject } from "../../assets/data"
function Project(){
  return(
    <CardContainer>
      {
        dataProject.map((data)=>(        
          <Card>        
            <CardPhoto src={data.photoDesktop } ></CardPhoto>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.description}</CardDescription>
            <CardButton>MAIS DETALHES</CardButton>
          </Card>  
        ))
      }
    </CardContainer>
  )
}
export default Project