import {  useState } from "react"
import { ContainerContact } from "./style"
import emailjs from '@emailjs/browser'
function Contato(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  function sendEmail(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    if(name === '' || email === '' || phone === ''){
      alert('Preencha os campos obrigatórios')
      return
    }
    const templateParams = {
      from_name: name,
      message: message,
      phone: phone,
      email: email
    }
    emailjs.send("service_lvqy18s", "template_q8rhh3t", templateParams, "w6BYmIRwZjyISu7n6")
    .then((res)=>{
      if(res.status === 200){
        alert('E-mail enviado com sucesso!')
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      }
    }, ()=>{
      alert('Falha ao enviar E-mail, tente novamente')
    })
  }
  return(
    <ContainerContact>
      <form action="">
        <div>
          <label htmlFor="">Nome:</label>
          <input type="text" required onChange={(e) => setName(e.target.value)} value={name}/>
        </div>
        <div>
          <label htmlFor="">E-mail:</label>
          <input type="text" required onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div>
          <label htmlFor="">Telefone:</label>
          <input type="text" required onChange={(e) => setPhone(e.target.value)} value={phone}/>
        </div>
        <div>
          <label htmlFor="">Mensagem (Opcional):</label>
          <textarea name="" id=""onChange={(e) => setMessage(e.target.value)} value={message}/>
        </div>
        <button type="submit" onClick={sendEmail}>Enviar</button>
      </form>
    </ContainerContact>
  )
}
export default Contato