import { useState } from "react";
import Lottie from 'react-lottie';
import AnimationData from './Switch.json';
import { Switch } from "./style";

function SwitchButton() {
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
    <Switch onClick={handleClick}>
      <Lottie
        options={defaultOptions}
        height="100%"
        width="100%"
        isStopped={isStopped}
        direction={direction}
      />
    </Switch>
  );
}

export default SwitchButton;
