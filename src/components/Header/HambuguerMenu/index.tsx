import Lottie, { LottieRefCurrentProps} from 'lottie-react';
import AnimationData from './MenuHambuguer.json';
import { Hambuguer } from "./style";
import { useRef, useState } from 'react';
function MenuHambuguer() {
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
    <Hambuguer className="Hambuguer">
      <Lottie
        height="100%"
        width="100%"
        autoplay={false}
        loop={false}
        onClick={animationPlay}
        lottieRef={hamburguerRef}
        animationData={AnimationData}
      />
    </Hambuguer>
  );
}

export default MenuHambuguer;
