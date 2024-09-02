import { useRef,useState } from "react";
import Lottie, { LottieRefCurrentProps} from 'lottie-react';
import AnimationData from './Switch.json';
import { Switch } from "./style";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../features/theme/sliceTheme";
function SwitchButton() {
  const SwitchRef= useRef<LottieRefCurrentProps>(null)
  const [direction, setDirection] = useState(1);
  const dispatch = useDispatch()
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
  const switchTheme = () => dispatch(toggleTheme())
  
  return (
    <Switch>
      <Lottie
        autoplay={false}
        loop={false}
        onClick={() => (animationPlay(),
           setTimeout(()=>{switchTheme()}, 200))
          }
        lottieRef={SwitchRef}
        animationData={AnimationData}
        height="100%"
        width="100%"
      />
    </Switch>
  );
}

export default SwitchButton;
