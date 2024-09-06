import { ContainerContact } from "./style"

function Contato(){
  return(
    <ContainerContact>
      <form action="">
        <div>
          <label htmlFor="">Nome:</label>
          <input type="text" required/>
        </div>
        <div>
          <label htmlFor="">E-mail:</label>
          <input type="text" required/>
        </div>
        <div>
          <label htmlFor="">Telefone:</label>
          <input type="text" required/>
        </div>
        <div>
          <label htmlFor="">Mensagem (Opcional):</label>
          <textarea name="" id="" />
        </div>
        <button>Enviar</button>
      </form>
    </ContainerContact>
  )
}
export default Contato