import { CardContainer, Card, CardDescription, CardPhoto, CardTitle, CardIcons } from "./style"
import github from '../../assets/images/git-white.svg'
import site from '../../assets/images/site-svgrepo-com.svg'
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
            <CardIcons>
              <a target="_blank" href={data.gitRepo}>
                <div className="github">
                    <img src={github}/>
                    <h3>Projeto</h3>
                </div>
              </a>

              <a target="_blank" href={data.vercelLink}>
                <div className="site">
                    <img src={site}/>
                    <h3>Site</h3>
                </div>
              </a>
            </CardIcons>
          </Card>  
        ))
      }
    </CardContainer>
  )
}
export default Project