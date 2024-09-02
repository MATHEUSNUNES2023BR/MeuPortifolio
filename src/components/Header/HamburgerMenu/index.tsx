import Lottie, { LottieRefCurrentProps} from 'lottie-react';
import AnimationData from './MenuHamburger.json';
import { Hamburger } from "./style";
import { useRef, useState } from 'react';
import { toggleHambuguer } from '../../../features/Sidebar/sliceSidebar';
import { useDispatch } from 'react-redux';
function MenuHamburger() {
  const dispatch = useDispatch()
  const hamburguerRef= useRef<LottieRefCurrentProps>(null)
  const [direction, setDirection] = useState(1);
  const animationPlay = () => {
    if(direction == 1){
      hamburguerRef.current?.play()
      hamburguerRef.current?.setDirection(1)

    }else{
      hamburguerRef.current?.play()
      hamburguerRef.current?.setDirection(-1)
    }
    setDirection(direction == 1 ? -1 : 1)
  }
  return (
    <Hamburger className="Hamburger">
      <Lottie
        height="100%"
        width="100%"
        autoplay={false}
        loop={false}
        onClick={() => ( 
          animationPlay(),
          dispatch(toggleHambuguer())
        )}
        lottieRef={hamburguerRef}
        animationData={AnimationData}
      />
    </Hamburger>
  );
}

export default MenuHamburger;
