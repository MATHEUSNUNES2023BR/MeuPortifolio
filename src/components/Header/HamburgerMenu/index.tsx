import Lottie, { LottieRefCurrentProps} from 'lottie-react';
import AnimationData from './MenuHamburger.json';
import { Hamburger } from "./style";
import { useRef } from 'react';
import { toggleHambuguer } from '../../../features/Sidebar/sliceSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
function MenuHamburger() {
  const dispatch = useDispatch()
  const stateHamburger = useSelector((state:RootState) => state.sliceSidebar.hamburgerState)
  const hamburguerRef= useRef<LottieRefCurrentProps>(null)
  if(stateHamburger == 'active'){
    hamburguerRef.current?.play()
    hamburguerRef.current?.setDirection(1)
  }
  else if(stateHamburger == 'disabled'){
    hamburguerRef.current?.play()
    hamburguerRef.current?.setDirection(-1)
  }

  return (
    <Hamburger className="Hamburger">
      <Lottie
        height="100%"
        width="100%"
        autoplay={false}
        loop={false}
        onClick={() => dispatch(toggleHambuguer())}
        lottieRef={hamburguerRef}
        animationData={AnimationData}
      />
    </Hamburger>
  );
}

export default MenuHamburger;
