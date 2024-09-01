import { useRef,useState } from "react";
import Lottie, { LottieRefCurrentProps} from 'lottie-react';
import AnimationData from './Switch.json';
import { Switch } from "./style";

function SwitchButton() {
  const SwitchRef= useRef<LottieRefCurrentProps>(null)
  const [direction, setDirection] = useState(1);

  const animationPlay = () => {
    if(direction == 1){
      SwitchRef.current?.play()
      SwitchRef.current?.setDirection(1)

    }else{
      SwitchRef.current?.play()
      SwitchRef.current?.setDirection(-1)
    }
    setDirection(direction == 1 ? -1 : 1)
  }

  return (
    <Switch>
      <Lottie
        autoplay={false}
        loop={false}
        onClick={animationPlay}
        lottieRef={SwitchRef}
        animationData={AnimationData}
        height="100%"
        width="100%"
      />
    </Switch>
  );
}

export default SwitchButton;
