import efoodDesktop from '../../assets/data/efoodDesktop.png'
import efoodMobile from '../../assets/data/efoodMobile.png'
import stakeHouseDesktop from '../../assets/data/stakeHouseDesktop.png'
import stakeHouseMobile from '../../assets/data/stakeHouseMobile.png'
import catalogoDesktop from '../../assets/data/catalogoDesktop.png'
import catalogoMobile from '../../assets/data/catalogoMobile.png'
import eventoDesktop from '../../assets/data/eventoDesktop.png'
import eventoMobile from '../../assets/data/eventoMobile.png'
import amPaintDesktop from '../../assets/data/amPaintDesktop.png'
import amPaintMobile from '../../assets/data/amPaintMobile.png'
import demonSlayerDesktop from '../../assets/data/demonSlayerDesktop.png'
import demonsSlayerMobile from '../../assets/data/demonsSlayerMobile.png'

interface data {
  photoDesktop: string,
  photoMobile: string,
  description: string,
  title: string,
  gitRepo: string,
  vercelLink: string
  language: string
}


export const dataProject: data[] = [
  { photoDesktop: efoodDesktop, photoMobile: efoodMobile,
    title: 'Efood',
    description:'O eFood é uma plataforma inspirada no modelo de delivery, semelhante ao iFood, onde os usuários podem explorar e selecionar restaurantes e seus cardápios de forma dinâmica. Desenvolvida com React e TypeScript, utiliza Redux para gerenciamento de estado e Styled Components para garantir uma interface moderna e responsiva.',
    gitRepo: 'https://github.com/MATHEUSNUNES2023BR/efood',
    language: 'TypeScript',
    vercelLink:'https://efood-rose.vercel.app/produtos/'
  },
  { photoDesktop:stakeHouseDesktop, photoMobile:stakeHouseMobile,
    title: 'StakeHouse',
    description:'O Stake House é um projeto desenvolvido para criar uma página de apresentação moderna e responsiva para uma churrascaria. O site foi construído com HTML, CSS e JavaScript, utilizando o framework Bootstrap 5 para garantir uma estrutura visual elegante e uma experiência de usuário consistente em diferentes dispositivos.',
    language: 'Lorem ipsum dolor',
    gitRepo: 'https://github.com/MATHEUSNUNES2023BR/Churrascaria',
    vercelLink:'https://stake-house.vercel.app/'
  },
  { photoDesktop:catalogoDesktop, photoMobile:catalogoMobile,
    title: 'BSA SUPLEMENTOS',
    description:'O BSA Suplementos é uma aplicação de Catálogo de Produtos desenvolvida para oferecer uma experiência de compra eficiente e intuitiva para consumidores de suplementos alimentares. A plataforma foi construída com React e TypeScript, garantindo alta performance e manutenibilidade. O design é responsivo e moderno, com foco na facilidade de navegação e interação do usuário.',
    language: 'Lorem ipsum dolor',
    gitRepo: 'https://github.com/MATHEUSNUNES2023BR/BSA-SUPLEMENTOS',
    vercelLink:'https://bsasuplementos.vercel.app/'
  },
  { photoDesktop:eventoDesktop, photoMobile:eventoMobile,
    title: 'Evento',
    description:'O Evento Fictício é uma página de apresentação criada para promover um evento imaginário, com foco em fornecer uma experiência visual impactante e informativa. A página foi desenvolvida utilizando SCSS para estilização, HTML para a estruturação do conteúdo e JavaScript para adicionar interatividade e animações sutis, garantindo uma navegação fluida e responsiva.',
    language: '',
    gitRepo: 'https://github.com/MATHEUSNUNES2023BR/evento_ficticio',
    vercelLink:'https://evento-ficticio-ivory.vercel.app/'
  },
  { photoDesktop:amPaintDesktop, photoMobile:amPaintMobile,
    title: 'AmPaint',
    description:'O AmPaint é uma página institucional simples e direta, criada para apresentar os serviços oferecidos por uma oficina especializada em pintura automotiva e lanternagem. O design foi focado na clareza e usabilidade, garantindo que os clientes possam visualizar facilmente os serviços oferecidos e obter informações de contato.',
    language: 'Lorem ipsum dolor',
    gitRepo: 'https://github.com/MATHEUSNUNES2023BR/am-paint-chapa-e-pintura',
    vercelLink:'https://am-paint-chapa-e-pintura.vercel.app/'
  },
  { photoDesktop:demonSlayerDesktop, photoMobile:demonsSlayerMobile,
    title: 'Demon Slayer',
    description:'O projeto Demon Slayer é uma aplicação interativa onde os usuários podem clicar em personagens da série e visualizar suas histórias em uma experiência dinâmica. Ao selecionar um personagem, o background da página muda de acordo com o personagem escolhido, e a história detalhada aparece na parte inferior da página, criando uma imersão visual e narrativa.',
    language: 'Lorem ipsum dolor',
    gitRepo: 'https://github.com/MATHEUSNUNES2023BR/DemonSlayer',
    vercelLink:'https://demon-slayer-sigma.vercel.app/'
  }
]
