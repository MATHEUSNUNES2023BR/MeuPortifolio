import { useState } from "react";
import Lottie from 'react-lottie';
import AnimationData from './MenuHambuguer.json';
import { Hambuguer } from "./style";

function MenuHambuguer() {
  const [direction, setDirection] = useState(-1);
  const [isStopped, setIsStopped] = useState(true);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleClick = () => {
    setDirection(direction === 1 ? -1 : 1);
    setIsStopped(false);
  };

  return (
    <Hambuguer onClick={handleClick} className="Hambuguer">
      <Lottie
        options={defaultOptions}
        height="100%"
        width="100%"
        isStopped={isStopped}
        direction={direction}
      />
    </Hambuguer>
  );
}

export default MenuHambuguer;
