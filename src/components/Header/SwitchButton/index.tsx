import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import AnimationData from "./Switch.json";
import { Switch } from "./style";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../features/theme/sliceTheme";

function SwitchButton() {
  const SwitchRef = useRef<LottieRefCurrentProps>(null);
  const [direction, setDirection] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    // Começar no estado correto com base no sessionStorage
    const totalFrames = AnimationData.op; // Total de frames da animação
    const initialDirection = Number(sessionStorage.getItem("switchButton")) || 1;

    if (initialDirection === -1) {
      SwitchRef.current?.goToAndStop(totalFrames - 1, true);
      setDirection(-1);
    } else {
      SwitchRef.current?.goToAndStop(0, true);
      setDirection(1);
    }
  }, []);

  const handleSwitch = () => {
    const newDirection = direction === 1 ? -1 : 1;

    // Atualizar direção da animação e tocar
    SwitchRef.current?.setDirection(newDirection);
    SwitchRef.current?.play();

    // Atualizar estado e sincronizar com o tema
    setDirection(newDirection);
    sessionStorage.setItem("switchButton", newDirection.toString());
    dispatch(toggleTheme());
  };

  return (
    <Switch>
      <Lottie
        autoplay={false}
        loop={false}
        onClick={handleSwitch}
        lottieRef={SwitchRef}
        animationData={AnimationData}
        height="100%"
        width="100%"
      />
    </Switch>
  );
}

export default SwitchButton;
