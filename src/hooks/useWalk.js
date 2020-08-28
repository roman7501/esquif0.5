import { useState } from "react";

const useWalk = () => {
  const [nextStep, setNextStep] = useState(0);
  const [initialStep, setInitialStep] = useState(0);
  const [indexStep, setIndexStep] = useState(0);
  const [isDraw, setIsDraw] = useState();
  //   Etats cailloux
  const [caillou, setCaillou] = useState(0);
  const [displayText, setDisplayText] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const steps = [0.13, 0.1, 0.07, 0.048, 0.02, 0.09, 0.14, 0.12, 0.09, 0.4];

  const agrandirChemin = () => {
    setInitialStep(nextStep);
    setNextStep(nextStep + steps[indexStep]);
    setIndexStep(indexStep + 1);
    setIsDraw(true);
    // Actions sur caillou
    setDisplayText(false);
    setIsClicked(true);
  };

  const assombrirChemin = () => {
    setIsDraw(false);
    // Actions sur caillou
    setCaillou(caillou + 1);
    setDisplayText(true);
    setIsInactive(true);
    console.log("chemin assombri", "caillou :", caillou);
  };

  return {
    isDraw,
    initialStep,
    nextStep,
    agrandirChemin,
    assombrirChemin,
    displayText,
    isInactive,
    isClicked,
    caillou,
  };
};

export default useWalk;
