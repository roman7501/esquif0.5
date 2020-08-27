import { useState } from "react";

const useCaillou = () => {
  const [caillou, setCaillou] = useState(0);
  const [displayText, setDisplayText] = useState(false);
  const maxPas = 1000;

  const caillouClick = () => {
    setCaillou(caillou + 1);
    setDisplayText(true);
    console.log("caillou :", caillou);
  };

  const locationCaillou = (getLoc) => {
    getLoc();
    setDisplayText(false);
  };
  return {
    caillou,
    setCaillou,
    displayText,
    maxPas,
    caillouClick,
    locationCaillou,
  };
};

export default useCaillou;
