import { BusinessCardButton, CloseButton, ContainerCard, OverlayCard } from "./style"
import cardBusiness from '../../../assets/images/meu-cartão.png'
import closeButton from '../../../assets/images/close.svg'
import { useState } from "react"

function BusinessCard(){
  const [card, setCard] = useState(false)
  return (
    <>
      <OverlayCard overlay={card}>
        <ContainerCard>
          <img src={cardBusiness} alt="" />
        </ContainerCard>
        <CloseButton onClick={()=>setCard(!card)}>
          <img src={closeButton} alt="" />
        </CloseButton>
      </OverlayCard>
      <BusinessCardButton onClick={()=>setCard(!card)}>CARTÃO DE VISITA</BusinessCardButton>
    </>
  )
}
export default BusinessCard