import { useState } from "react";

const useChemin = () => {
  const [nextStep, setNextStep] = useState(0);
  const [initialStep, setInitialStep] = useState(0);
  const [indexStep, setIndexStep] = useState(0);
  const [isDraw, setIsDraw] = useState();

  const steps = [0.13, 0.1, 0.07, 0.048, 0.02, 0.09, 0.14, 0.12, 0.09, 0.4];

  const agrandirChemin = () => {
    // MAJ Initial Step
    setInitialStep(nextStep);
    // MAJ Next Step
    setNextStep(nextStep + steps[indexStep]);
    // MAJ Index
    setIndexStep(indexStep + 1);
    // MAJ isDraw
    setIsDraw(true);
    console.log("nextStep :", nextStep, "isDraw : ", isDraw);
  };

  const assombrirChemin = () => {
    setIsDraw(false);
    console.log("assombri chemin ");
  };

  return { isDraw, initialStep, nextStep, agrandirChemin, assombrirChemin };
};

export default useChemin;
